import { useState, useEffect, useRef } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { Input } from "@/components/ui/input";
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocationInputProps {
  placeholder: string;
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const LocationInput = ({ placeholder, onPlaceSelect }: LocationInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const places = useMapsLibrary('places');
  const sessionTokenRef = useRef<google.maps.places.AutocompleteSessionToken>();

  useEffect(() => {
    if (!places) return;
    sessionTokenRef.current = new places.AutocompleteSessionToken();
  }, [places]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 2 && places) {
      const service = new places.AutocompleteService();
      service.getPlacePredictions(
        {
          input: value,
          sessionToken: sessionTokenRef.current,
          componentRestrictions: { country: 'in' } // Restrict search to India
        },
        (predictions, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  };
  
  const handleSuggestionClick = (placeId: string) => {
    if (!places) return;
    const service = new places.PlacesService(document.createElement('div'));
    service.getDetails({ placeId, sessionToken: sessionTokenRef.current, fields: ['name', 'formatted_address', 'geometry'] }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && place) {
        setInputValue(place.name || place.formatted_address || ''); // Prioritize name over address
        onPlaceSelect(place);
        setSuggestions([]);
        sessionTokenRef.current = new places.AutocompleteSessionToken(); // Create a new token after a place is selected
      }
    });
  };

  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        className="h-12 pl-10"
        value={inputValue}
        onChange={handleInputChange}
        autoComplete="off"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-background border border-border rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
          {suggestions.map(({ place_id, description }) => (
            <li
              key={place_id}
              className="px-4 py-2 cursor-pointer hover:bg-accent"
              onClick={() => handleSuggestionClick(place_id)}
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;