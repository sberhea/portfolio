// src/app/design-system/page.tsx
import Button from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { H1, H2, H3, H4, Body, BodyLarge, BodySmall, Lead, Muted, Code } from '@/components/ui/Typography';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <H1>Design System</H1>
          <Lead>A comprehensive collection of reusable components and design tokens</Lead>
        </div>

        {/* Typography Section */}
        <section className="space-y-8">
          <H2>Typography</H2>
          
          <Card>
            <CardHeader>
              <CardTitle>Headings</CardTitle>
              <CardDescription>Semantic heading hierarchy with responsive scaling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Muted>H1 - Hero Heading</Muted>
                <H1>The quick brown fox jumps</H1>
              </div>
              
              <div>
                <Muted>H2 - Section Heading</Muted>
                <H2>The quick brown fox jumps</H2>
              </div>
              
              <div>
                <Muted>H3 - Subsection Heading</Muted>
                <H3>The quick brown fox jumps</H3>
              </div>
              
              <div>
                <Muted>H4 - Component Heading</Muted>
                <H4>The quick brown fox jumps</H4>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Body Text</CardTitle>
              <CardDescription>Text components for content and descriptions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Muted>Lead Text</Muted>
                <Lead>This is lead text that introduces important content with emphasis.</Lead>
              </div>
              
              <div>
                <Muted>Large Body</Muted>
                <BodyLarge>This is large body text for important descriptions and key information.</BodyLarge>
              </div>
              
              <div>
                <Muted>Regular Body</Muted>
                <Body>This is regular body text for general content and paragraphs with good readability.</Body>
              </div>
              
              <div>
                <Muted>Small Body</Muted>
                <BodySmall>This is small body text for secondary information and captions.</BodySmall>
              </div>
              
              <div>
                <Muted>Code</Muted>
                <div><Code>const greeting = "Hello World";</Code></div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Button Section */}
        <section className="space-y-8">
          <H2>Buttons</H2>
          
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Interactive buttons with different visual styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Muted>Primary</Muted>
                    <div className="mt-2">
                      <Button variant="primary">Get Started</Button>
                    </div>
                  </div>
                  
                  <div>
                    <Muted>Secondary</Muted>
                    <div className="mt-2">
                      <Button variant="secondary">Learn More</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Muted>Outline</Muted>
                    <div className="mt-2">
                      <Button variant="outline">Contact Me</Button>
                    </div>
                  </div>
                  
                  <div>
                    <Muted>Ghost</Muted>
                    <div className="mt-2">
                      <Button variant="ghost">View Project</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
              <CardDescription>Different sizes for various use cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Card Section */}
        <section className="space-y-8">
          <H2>Cards</H2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>
                  A basic card with hover effects and clean styling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Body>This card demonstrates the standard card component with header, content, and footer sections.</Body>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card hover gradient>
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>
                  A card with subtle gradient background
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Body>This card features a subtle gradient background that adds visual interest without being distracting.</Body>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Color Preview */}
        <section className="space-y-8">
          <H2>Color System</H2>
          
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>Primary colors and gradients used throughout the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 bg-blue-600 rounded-lg"></div>
                  <BodySmall>Blue 600</BodySmall>
                </div>
                
                <div className="space-y-2">
                  <div className="h-16 bg-purple-600 rounded-lg"></div>
                  <BodySmall>Purple 600</BodySmall>
                </div>
                
                <div className="space-y-2">
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                  <BodySmall>Primary Gradient</BodySmall>
                </div>
                
                <div className="space-y-2">
                  <div className="h-16 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg"></div>
                  <BodySmall>Card Background</BodySmall>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}