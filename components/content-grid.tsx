'use client';

import { ContentCard } from './content-card';

const contentData = [
  {
    title: 'Web Development',
    description:
      'Modern, responsive websites built with cutting-edge technologies and best practices for optimal performance.',
    imageUrl:
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'View Projects',
  },
  {
    title: 'Mobile Solutions',
    description:
      'Cross-platform mobile applications that deliver native performance and exceptional user experiences.',
    imageUrl:
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'Explore Apps',
  },
  {
    title: 'UI/UX Design',
    description:
      'User-centered design solutions that combine beautiful aesthetics with intuitive functionality and accessibility.',
    imageUrl:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'Design Gallery',
  },
  {
    title: 'E-commerce',
    description:
      'Scalable online stores with secure payment processing, inventory management, and conversion optimization.',
    imageUrl:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'Shop Solutions',
  },
  {
    title: 'Digital Strategy',
    description:
      'Comprehensive digital transformation strategies that align technology with business goals and growth objectives.',
    imageUrl:
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'Learn More',
  },
  {
    title: 'Cloud Services',
    description:
      'Reliable cloud infrastructure and deployment solutions that scale with your business needs and requirements.',
    imageUrl:
      'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'Cloud Solutions',
  },
];

export function ContentGrid() {
  return (
    <section className='py-16 md:py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white'>
            Our Services
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Comprehensive solutions designed to elevate your digital presence
            and drive business growth
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {contentData.map((item, index) => (
            <ContentCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              buttonText={item.buttonText}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
