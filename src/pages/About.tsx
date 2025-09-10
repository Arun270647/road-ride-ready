import Header from "@/components/Header";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import carCompany from "@/assets/car-company.jpg";
import member1 from "@/assets/team/member1.jpg";
import member2 from "@/assets/team/member2.jpg";
import member3 from "@/assets/team/member3.jpg";
import member4 from "@/assets/team/member4.jpg";
import member5 from "@/assets/team/member5.jpg";
import member6 from "@/assets/team/member6.jpg";

const About = () => {
  const teamMembers = [
    { id: 1, name: "James Anderson", role: "CEO & Founder", image: member1 },
    { id: 2, name: "Sarah Mitchell", role: "Operations Director", image: member2 },
    { id: 3, name: "Michael Chen", role: "Customer Relations", image: member3 },
    { id: 4, name: "Emily Rodriguez", role: "Finance Manager", image: member4 },
    { id: 5, name: "David Wilson", role: "Fleet Manager", image: member5 },
    { id: 6, name: "Lisa Thompson", role: "Marketing Director", image: member6 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About</h1>
          <nav className="text-lg">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>About</span>
          </nav>
        </div>
      </section>

      {/* Car Company Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Car Company</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, 
                repudiandae similique accusantium eius nulla quam laudantium sequi.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum commodi, 
                laborum dolore, fuga aliquid delectus cum ipsa?
              </p>
            </div>
            <div>
              <img 
                src={carCompany} 
                alt="Happy couple in car" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">{member.name}</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;