
import React from 'react';

export const LogoIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="black"/>
        <path d="M25 75L50 25L40 25L25 50V25H35L60 75H50L35 50V75H25Z" fill="#FBBF24"/>
        <path d="M75 25L50 75L60 75L75 50V75H65L40 25H50L65 50V25H75Z" fill="#FBBF24"/>
    </svg>
);

export const ClockIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const DumbbellIcon = ({ className }: { className?: string }) => (
     <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6.375c0 1.223.996 2.219 2.228 2.219h.01a2.235 2.235 0 0 0 2.228-2.219c0-1.223-.996-2.219-2.228-2.219h-.01a2.235 2.235 0 0 0-2.228 2.219Zm0 11.25c0 1.223.996 2.219 2.228 2.219h.01a2.235 2.235 0 0 0 2.228-2.219c0-1.223-.996-2.219-2.228-2.219h-.01a2.235 2.235 0 0 0-2.228 2.219ZM3 12.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm0-3.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008ZM9.75 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm10.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm0-3.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" />
    </svg>
);

export const CoachIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

export const CommunityIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M5.5 2.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM3 5.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM14.5 2.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 5.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" clipRule="evenodd"></path>
      <path d="M7 10.5a.5.5 0 01.5.5v1.5a1 1 0 001 1h2a1 1 0 001-1v-1.5a.5.5 0 011 0v1.5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1.5a.5.5 0 01.5-.5z"></path>
      <path d="M5.146 11.146a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708zM14.854 11.146a.5.5 0 00-.708 0l-2 2a.5.5 0 00.708.708l2-2a.5.5 0 000-.708z"></path>
    </svg>
);

export const FEATURES = [
    {
        icon: <ClockIcon className="h-8 w-8" />,
        title: '24/7 Gym Access',
        description: 'Workout on your schedule, not ours. Our doors are always open for you, day or night.',
    },
    {
        icon: <DumbbellIcon className="h-8 w-8" />,
        title: 'Premium Equipment',
        description: 'State-of-the-art machines and a wide range of free weights to power any workout.',
    },
    {
        icon: <CoachIcon className="h-8 w-8" />,
        title: 'Expert Trainers',
        description: 'Certified personal trainers dedicated to helping you achieve your personal fitness goals.',
    },
    {
        icon: <CommunityIcon className="h-8 w-8" />,
        title: 'Supportive Community',
        description: 'Join a motivating and friendly environment where everyone supports each other.',
    },
];

export const SERVICES = [
    {
        title: 'Personal Training',
        description: 'One-on-one coaching to maximize your results.',
        imageUrl: 'https://picsum.photos/600/400?image=200',
    },
    {
        title: 'Group Fitness Classes',
        description: 'High-energy classes like HIIT, Yoga, and Zumba.',
        imageUrl: 'https://picsum.photos/600/400?image=306',
    },
    {
        title: 'Recovery Zone',
        description: 'Relax and rejuvenate with our sauna and massage therapy.',
        imageUrl: 'https://picsum.photos/600/400?image=129',
    },
];

export const GALLERY_IMAGES = [
    { src: 'https://picsum.photos/800/600?image=883', span: 'row' },
    { src: 'https://picsum.photos/800/600?image=822', span: 'col' },
    { src: 'https://picsum.photos/800/600?image=1078', span: '' },
    { src: 'https://picsum.photos/800/600?image=996', span: '' },
];

export const TESTIMONIALS = [
    {
        name: 'John D.',
        title: 'Lost 20 lbs in 3 Months',
        quote: 'KFitness has completely changed my perspective on fitness. The trainers are incredibly supportive, and the 24/7 access is a game-changer for my busy schedule. I feel stronger and more confident than ever!',
        avatar: 'https://picsum.photos/100/100?image=836'
    },
    {
        name: 'Samantha G.',
        title: 'Group Class Enthusiast',
        quote: "I absolutely love the group classes here! The energy is contagious, and the instructors make every workout fun. It's not just a gym; it's a community. I've made so many friends.",
        avatar: 'https://picsum.photos/100/100?image=923'
    },
    {
        name: 'Mike R.',
        title: 'Bodybuilding Competitor',
        quote: 'The quality and variety of equipment at KFitness are top-notch. It has everything I need to prepare for my competitions. The recovery facilities are also a huge plus for my post-workout routine.',
        avatar: 'https://picsum.photos/100/100?image=669'
    },
];
