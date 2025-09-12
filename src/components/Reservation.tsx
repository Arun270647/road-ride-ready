import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSub, 
  DropdownMenuSubContent, 
  DropdownMenuSubTrigger, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, ChevronDown, Clock } from "lucide-react";
import { format, addSeconds } from "date-fns";
import { cn } from "@/lib/utils";
import reservationBg from "@/assets/hero-bg.jpg";
import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';
import LocationInput from "./LocationInput";
import { Link } from "react-router-dom";


const ReservationForm = () => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [pickupTime, setPickupTime] = useState("");
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [pickupLocation, setPickupLocation] = useState<google.maps.places.PlaceResult | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<google.maps.places.PlaceResult | null>(null);

  const [estimatedDuration, setEstimatedDuration] = useState<string | null>(null);
  const [estimatedDropoffTime, setEstimatedDropoffTime] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const routesLibrary = useMapsLibrary('routes');

  const carTypes = {
    "Small Vehicle": ["Indica", "Honda City", "WagonR", "Swift Dzire", "Glanza", "Baleno"],
    "Large Vehicle": ["XUV", "Innova", "Innova Crysta", "Scorpio"],
    "Van/Bus": ["Tourist Bus"],
    "Tempo": ["Tempo Traveller"],
  };
  
  const timeSlots = Array.from({ length: 24 * 2 }, (_, i) => {
    const totalMinutes = i * 30;
    const hour24 = Math.floor(totalMinutes / 60);
    const minute = (totalMinutes % 60).toString().padStart(2, '0');
    
    const period = hour24 >= 12 ? "PM" : "AM";
    let hour12 = hour24 % 12;
    if (hour12 === 0) {
        hour12 = 12;
    }
    const format12hr = `${hour12.toString().padStart(2, '0')}:${minute} ${period}`;
    const format24hr = `${hour24.toString().padStart(2, '0')}:${minute}`;
    
    return {
        value: format24hr, // Use 24hr format for easier calculations
        label: `${format12hr} (${format24hr})`
    };
  });

  const handleEstimate = () => {
    if (!routesLibrary || !pickupLocation?.geometry?.location || !dropoffLocation?.geometry?.location || !pickupDate || !pickupTime) return;
  
    setIsLoading(true);
    setEstimatedDuration(null);
    setEstimatedDropoffTime(null);
  
    const directionsService = new routesLibrary.DirectionsService();
    
    directionsService.route({
      origin: pickupLocation.geometry.location,
      destination: dropoffLocation.geometry.location,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        const leg = result.routes[0]?.legs[0];
        if (leg?.duration) {
          setEstimatedDuration(leg.duration.text);
          
          const [hours, minutes] = pickupTime.split(':');
          const pickupDateTime = new Date(pickupDate);
          pickupDateTime.setHours(parseInt(hours, 10), parseInt(minutes, 10));

          const dropoffDateTime = addSeconds(pickupDateTime, leg.duration.value);
          setEstimatedDropoffTime(dropoffDateTime);

        } else {
          setEstimatedDuration("Not available");
        }
      } else {
        console.error(`Error fetching directions: ${status}`);
        setEstimatedDuration("Could not calculate");
      }
      setIsLoading(false);
    });
  };


  return (
    <Card className="bg-background/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Book Cab At Your Place Now</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full h-12 justify-between font-normal">
                <span>{selectedCar || "Select Your Car type"}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              {Object.entries(carTypes).map(([category, models]) => (
                <DropdownMenuSub key={category}>
                  <DropdownMenuSubTrigger>{category}</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {models.map((model) => (
                      <DropdownMenuItem key={model} onSelect={() => setSelectedCar(model)}>
                        {model}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <LocationInput 
            placeholder="Pick Up Location"
            onPlaceSelect={(place) => setPickupLocation(place)}
          />

          <LocationInput 
            placeholder="Drop Off Location"
            onPlaceSelect={(place) => setDropoffLocation(place)}
          />

          <div className="grid grid-cols-2 gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal h-12",
                    !pickupDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {pickupDate ? format(pickupDate, "PPP") : <span>Pick Up Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} initialFocus />
              </PopoverContent>
            </Popover>
            <Select value={pickupTime} onValueChange={setPickupTime}>
              <SelectTrigger className="h-12">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Pick Up Time" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map(time => <SelectItem key={time.value} value={time.value}>{time.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          
          {pickupLocation && dropoffLocation && pickupDate && pickupTime && !estimatedDuration && (
            <Button type="button" size="lg" className="w-full h-12 text-lg" onClick={handleEstimate} disabled={isLoading}>
              {isLoading ? 'Calculating...' : 'Estimate Trip'}
            </Button>
          )}

          {estimatedDuration && (
            <div className="text-center p-3 bg-muted rounded-md space-y-1">
              <p className="font-semibold">Estimated Travel Time: <span className="text-primary">{estimatedDuration}</span></p>
              {estimatedDropoffTime && (
                <p className="text-sm text-muted-foreground">
                  Estimated Arrival: {format(estimatedDropoffTime, "MMM d, p")}
                </p>
              )}
            </div>
          )}
          
          {estimatedDuration && (
            <Link to="/contact" className="w-full">
              <Button size="lg" className="w-full h-12 text-lg">
                Book Now
              </Button>
            </Link>
          )}

        </div>
      </CardContent>
    </Card>
  );
}

const Reservation = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <section 
        className="relative py-20 bg-cover bg-center" 
        style={{ backgroundImage: `url(${reservationBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ReservationForm />
            <div className="text-white text-center lg:text-left">
              <h2 className="text-5xl font-bold leading-tight">Plan your trip now with Kanika Travels</h2>
              <h3 className="text-4xl font-bold">Book Cab at Ease</h3>
              <p className="mt-4 text-lg text-gray-300">Treat yourself in India</p>
            </div>
          </div>
        </div>
      </section>
    </APIProvider>
  );
};

export default Reservation;