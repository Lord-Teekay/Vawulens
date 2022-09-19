import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "10 Week Mass Building Program",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "8-Week-Knee-Friendly Quad Program",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "8-Week Shoulder Workout to Build Cannonball Delts",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "12 Week Fat Destroyer: Complete Fat Loss Workout",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "If It Isn’t Fun, It Doesn’t Get Done… Make It FUN!"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Build A Positive Team and Family Environment."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Pursue Continual Learning and Growth."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Build Strong Relationships Through Honesty and Transparency."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "As a general goal, aim for at least 30 minutes of moderate physical activity every day. If you want to lose weight, maintain weight loss or meet specific fitness goals, you may need to exercise more. Reducing sitting time is important, too. The more hours you sit each day, the higher your risk of metabolic problems."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Regardless of when you workout, there are many health benefits from moving regularly, like improving your heart health, getting stronger or even improving your endurance. Most people decide to exercise when it fits their schedule best, so often times they can't help the time of the day they choose to be active.Research has shown, however, that the time of day you choose to exercise can affect your workout in various ways."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Ideally, aim for at least 150 minutes of moderate activity or 75 minutes of vigorous intensity cardio exercise per week."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Warm up properly before exercising to prevent injury and make your workouts more effective. This warm-up routine should take at least 6 minutes. Warm up for longer if you feel the need."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "If you're looking to build strength and put on muscle mass, research suggests you are best to keep your weights separate from your cardio work."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Body-weight training — using only your body weight for resistance — can be an effective type of strength training and a good addition to your fitness program. Body-weight training can be as effective as training with free weights or weight machines."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "“I’ve never been one of those people who loves the gym or looks forward to exercise, ill openly admit that I just don’t have to self-discipline or self-motivation. Since joining the Vawulens, I’ve loved training, the most important thing of the whole experience is that it’s fun and I look forward to every session as no two sessions are ever the same. Since joining the Vawulens, I’ve gained a level of fitness I never thought possible and have increased my self-confidence ...",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Daniel's sessions are always fun and motivating, using a mixture of different equipment and exercises. I have learnt so much from Ryan, he’s knowledge is exceptional and it’s a pleasure to train with him.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "I had a knee replacement 4 years ago and totally regretted it, it was worse than ever and I couldn’t walk 10 minutes without having to stop, I’ve only had 5 sessions but the difference they have made is unbelievable, I already have more movement with a lot less pain and this has made getting around day to day a lot easier.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "When I first started training with the training, I was really out of shape and was feeling tired all the time. I knew it was time I had the quite word with myself and needed an experienced, knowledgeable person to help me out. Now a year down the line, I have lost weight, I feel 100% fitter and I am always energised!",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "I have been training with Shatta now for a while, and i can honestly say it's been the best decision I've ever made. I've been training on and off since being in my teens but never really been happy with achieving my full goals. Since being under Shatta's tuition, I have learnt more about my nutrition and training than ever before.Currently I'm in the gym with Andy 3 sessions a week and have lost around 3 stone of body fat. Shatta is a great..",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'Workout Program', available: true},
            {feature: 'Video Demos of Exercises', available: true},
            {feature: 'Nutrition Plan', available: true},
            {feature: 'Lifestyle Habit Coaching', available: true},
            {feature: 'T Shirt', available: true},
            {feature: 'Healthy Recipes', available: false},
            {feature: 'Fitness Tips', available: false},
            {feature: 'Individualised supplement protocol', available: false},
            {feature: 'Free Locker', available: false},
            {feature: 'Fingerprint Entry', available: false},
            {feature: 'Unlimited 24/7 Access', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'Customized Workout Program', available: true},
            {feature: 'Video Demos of Exercises', available: true},
            {feature: 'Customized Nutrition Plan', available: true},
            {feature: 'Lifestyle Habit Coaching', available: true},
            {feature: 'T Shirt', available: true},
            {feature: 'Healthy Recipes', available: true},
            {feature: 'Fitness Tips', available: true},
            {feature: 'Individualised supplement protocol', available: false},
            {feature: 'Free Locker', available: false},
            {feature: 'Fingerprint Entry', available: false},
            {feature: 'Unlimited 24/7 Access', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'Customized Workout Program', available: true},
            {feature: 'Video Demos of Exercises', available: true},
            {feature: 'Customized Nutrition Plan', available: true},
            {feature: 'Lifestyle Habit Coaching', available: true},
            {feature: 'T Shirt & Bag', available: true},
            {feature: 'Healthy Recipes', available: true},
            {feature: 'Fitness Tips', available: true},
            {feature: 'Individualised supplement protocol', available: true},
            {feature: 'Free Locker', available: true},
            {feature: 'Fingerprint Entry', available: true},
            {feature: 'Unlimited 24/7 Access', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]