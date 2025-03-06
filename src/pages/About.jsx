import { useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, Users, GraduationCap, BookOpen, Target, ArrowRight } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const values = [
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of connected communities to drive professional growth and support."
    },
    {
      icon: Heart,
      title: "Support",
      description: "We're committed to supporting our alumni through every stage of their professional journey."
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "We promote lifelong learning and knowledge sharing between alumni of all generations."
    },
    {
      icon: BookOpen,
      title: "Transparency",
      description: "We maintain honest and open communication with our alumni community at all times."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in all our services and continually seek to improve our platform."
    }
  ];
  
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Jamie Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
    },
    {
      name: "Taylor Reed",
      role: "Head of Mentorship",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Jordan Singh",
      role: "Career Services Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C3A1FF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C3A1FF]/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#C3A1FF]/10 border border-primary/20">
              <span className="text-sm font-medium text-[#C3A1FF]">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About <span className="text-gradient">Alumni Portal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-[#0A0A0D] mb-8">
              We're building the most comprehensive platform for alumni networking, mentorship, and career advancement, designed exclusively for graduates like you.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="section-padding bg-[#F4F4F7]/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-lg hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-lg animate-float z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#C3A1FF]/20 flex items-center justify-center">
                    <span className="text-[#C3A1FF] text-lg font-bold">2018</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Founded</h3>
                    <p className="text-sm text-muted-[#0A0A0D]">By alumni, for alumni</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="max-w-xl" delay={200}>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#C3A1FF]/10 border border-primary/20">
                <span className="text-sm font-medium text-[#C3A1FF]">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Empowering Alumni Through Connection
              </h2>
              <p className="text-lg text-muted-[#0A0A0D] mb-6">
                We believe that the power of an alumni network extends far beyond graduation. Our mission is to create a dynamic community where graduates can connect, share knowledge, and advance their careers through meaningful relationships.
              </p>
              <p className="text-lg text-muted-[#0A0A0D] mb-6">
                Founded in 2018 by a group of graduates who recognized the untapped potential of alumni networks, we've grown to serve thousands of alumni worldwide, facilitating mentorships, job placements, and valuable connections.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Create meaningful professional connections",
                  "Facilitate knowledge sharing across generations",
                  "Provide exclusive career advancement opportunities",
                  "Build a supportive community for lifelong success"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#C3A1FF] mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#C3A1FF]/10 border border-primary/20">
              <span className="text-sm font-medium text-[#C3A1FF]">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="text-lg text-muted-[#0A0A0D]">
              Our core values guide everything we do as we build and grow our alumni community.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary/20 hover-lift"
                delay={index * 100}
              >
                <div className="h-12 w-12 rounded-full bg-[#C3A1FF]/10 flex items-center justify-center mb-4 text-[#C3A1FF]">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-[#0A0A0D]">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-[#F4F4F7]/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#C3A1FF]/10 border border-primary/20">
              <span className="text-sm font-medium text-[#C3A1FF]">Leadership Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Meet the <span className="text-gradient">Visionaries</span>
            </h2>
            <p className="text-lg text-muted-[#0A0A0D]">
              Our dedicated team of professionals is committed to building the best platform for alumni success.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <AnimatedSection
                key={member.name}
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:border-primary/20 hover-lift"
                delay={index * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover object-center"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-muted-[#0A0A0D]">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C3A1FF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C3A1FF]/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-lg text-muted-[#0A0A0D] mb-8">
              Become part of our alumni network today and unlock a world of professional opportunities.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C3A1FF] text-white font-medium hover:bg-[#C3A1FF]/90 transition-all hover-lift"
            >
              Create Your Account <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
