import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";

const Jobs = () => {
  const jobListings = [
    {
      title: "Senior DevOps Engineer",
      department: "Engineering",
      location: "Auckland, NZ",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our platform team to build and maintain our hosting infrastructure. Experience with Kubernetes, AWS, and monitoring tools required.",
      skills: ["Kubernetes", "AWS", "Docker", "Terraform", "Monitoring"]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Wellington, NZ",
      type: "Full-time",
      experience: "3+ years",
      description: "Help our enterprise customers succeed with their hosting solutions. Strong communication skills and technical background preferred.",
      skills: ["Customer Relations", "Technical Support", "Project Management"]
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Auckland, NZ",
      type: "Full-time",
      experience: "1-3 years",
      description: "Generate new business opportunities and qualify leads for our sales team. Experience in B2B sales preferred.",
      skills: ["B2B Sales", "Lead Generation", "CRM", "Communication"]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote, NZ",
      type: "Full-time",
      experience: "3+ years",
      description: "Build beautiful and responsive user interfaces for our hosting platform. React and TypeScript experience required.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Testing"]
    }
  ];

  const benefits = [
    "Competitive salary + equity package",
    "Comprehensive health and dental coverage",
    "4 weeks paid vacation + public holidays",
    "Professional development budget",
    "Flexible working arrangements",
    "Modern office spaces in Auckland & Wellington",
    "Team retreats and social events",
    "Latest MacBook Pro and equipment"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build the future of web hosting in New Zealand. We're looking for passionate people to help us deliver world-class hosting solutions.
              </p>
            </div>

            {/* Company Culture */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Work with passionate professionals who care about delivering exceptional customer experiences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Advance your career with mentorship, training, and opportunities to lead exciting projects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Enjoy flexible hours, remote work options, and a culture that values your well-being.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle>Why Work With Us?</CardTitle>
                <CardDescription>
                  We offer competitive compensation and comprehensive benefits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Open Positions</h2>
              <div className="space-y-6">
                {jobListings.map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{job.department}</Badge>
                            <Badge variant="outline">{job.type}</Badge>
                            <Badge variant="outline">{job.experience}</Badge>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <Button>Apply Now</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="mt-16 text-center">
              <CardHeader>
                <CardTitle>Don't See a Perfect Match?</CardTitle>
                <CardDescription>
                  We're always looking for talented individuals to join our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Send us your resume and tell us how you'd like to contribute to our mission of providing exceptional hosting services.
                </p>
                <Button size="lg">Send Your Resume</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;