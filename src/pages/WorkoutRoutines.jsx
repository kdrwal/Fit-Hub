import React, { useState, useEffect } from "react";
import './WorkoutRoutines.css';
import Layout from "../components/Layout";
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import IMG1 from '../pic/IMG1.png';
import IMG2 from '../pic/IMG2.jpg';
import IMG3 from '../pic/IMG3.png';
import IMG4 from '../pic/IMG4.jpg';
import IMG5 from '../pic/IMG5.jpg';



const monday = [
    {
        id: 1,
        name: 'Incline Dumbbell Pres',
        description: 'Set an adjustable bench to a 30-45 degree incline. Hold a dumbbell in each hand and lie back on the bench. Press the dumbbells upward until your arms are fully extended, then lower them back down until your elbows are at a 90-degree angle or slightly below.',
        reps: '4 sets of 8-10 reps'
    },
    {
        id: 2,
        name: 'Cable Chest Flyes',
        description: 'Set the pulleys on a cable machine to the highest position. Stand in the middle, grab a handle in each hand, and take a step forward. Keep a slight bend in your elbows and bring your hands together in front of you, crossing over at the midpoint. Slowly return to the starting position',
        reps: '3 sets of 12-15 reps'
    },
    {
        id: 3,
        name: 'Triceps Dips',
        description: 'Position yourself between parallel bars, with your arms fully extended and supporting your body weight. Lower your body by bending your elbows until your upper arms are parallel to the ground. Push yourself back up to the starting position, focusing on using your triceps',
        reps: '3 sets of 10-12 reps'
    },
    {
        id: 4,
        name: 'Close-Grip Bench Press',
        description: 'Lie on a flat bench and grip the barbell with your hands shoulder-width apart or slightly narrower. Lower the barbell to your lower chest, keeping your elbows close to your body. Press the bar back up, extending your arms fully.',
        reps: '4 sets of 8-10 reps'
    }
]

const tuesday = [
    {
        id: 1,
        name: 'Pull-Ups',
        description: 'Grip a pull-up bar with your palms facing away from you, slightly wider than shoulder-width apart. Hang with your arms fully extended. Pull yourself up until your chin is above the bar, then lower yourself back down with control.',
        reps: '4 sets of 8-10 reps'
    },
    {
        id: 2,
        name: 'Bent-Over Barbell Rows',
        description: 'Stand with your feet shoulder-width apart, holding a barbell with an overhand grip, hands slightly wider than shoulder-width apart. ',
        reps: '4 sets of 8-10 reps'
    },
    {
        id: 3,
        name: 'Dumbbell Bicep Curls',
        description: 'Stand tall with a dumbbell in each hand, palms facing forward. Keep your elbows close to your torso and curl the weights upwards towards your shoulders, contracting your biceps at the top. Slowly lower the dumbbells back to the starting position.',
        reps: '3 sets of 8-12 reps'
    },
    {
        id: 4,
        name: 'Seated Cable Rows',
        description: 'Sit at a cable row machine with your feet placed on the platform, knees slightly bent. Grab the handle with an overhand grip, palms facing down. Pull the handle towards your abdomen, squeezing your shoulder blades together at the end of the movement, then slowly extend your arms back to the starting position.',
        reps: '3 sets of 10-12 reps'
    }
]

const thursday = [
    {
        id: 1,
        name: 'Overhead Shoulder Press',
        description: 'Stand with your feet shoulder-width apart, holding a dumbbell in each hand by your sides with palms facing inward. Keeping a slight bend in your elbows, raise the dumbbells out to the sides until they reach shoulder level. Lower them back down with control.',
        reps: '4 sets of 8-10 reps'
    },
    {
        id: 2,
        name: 'Lateral Raises',
        description: 'Stand with your feet shoulder-width apart, holding a barbell with an overhand grip, hands slightly wider than shoulder-width apart. ',
        reps: '4 sets of 8-10 reps'
    },
    {
        id: 3,
        name: 'Arnold Press',
        description: 'Sit on a bench with back support, holding a dumbbell in each hand at shoulder height with your palms facing towards you. Press the dumbbells overhead while rotating your palms to face away from you at the top of the movement. Reverse the motion to return to the starting position.',
        reps: '3 sets of 10-12 reps'
    },
    {
        id: 4,
        name: 'Tricep Dumbbell Kickbacks',
        description: 'Hold a dumbbell in each hand and bend forward at the waist, keeping your back straight. Extend your arms back, keeping your elbows close to your body, until your arms are fully extended. Hold for a moment, then return to the starting position.',
        reps: '3 sets of 12-15 reps'
    }
]

const friday = [
    {
        id: 1,
        name: 'Squats',
        description: 'Stand with your feet shoulder-width apart, with a barbell resting on your upper back. Keeping your chest up and core engaged, lower your body by bending your knees and pushing your hips back as if you are sitting into a chair. Lower until your thighs are parallel to the ground, then push through your heels to return to the starting position.',
        reps: '4 sets of 8-10 reps'
    },
    {
        id: 2,
        name: 'Romanian Deadlifts',
        description: 'Stand with your feet hip-width apart, holding a barbell in front of your thighs with an overhand grip. Keeping your back straight and core engaged, hinge at your hips and lower the barbell towards the ground while keeping it close to your body.',
        reps: '4 sets of 8-10 reps'
    },
    {
        id: 3,
        name: 'Lunges',
        description: 'Stand tall with a dumbbell in each hand, palms facing forward. Keep your elbows close to your torso and curl the weights upwards towards your shoulders, contracting your biceps at the top. Slowly lower the dumbbells back to the starting position.',
        reps: '3 sets of 8-12 reps'
    },
    {
        id: 4,
        name: 'Bicep Curls',
        description: 'Sit at a cable row machine with your feet placed on the platform, knees slightly bent. Grab the handle with an overhand grip, palms facing down. Pull the handle towards your abdomen, squeezing your shoulder blades together at the end of the movement, then slowly extend your arms back to the starting position.',
        reps: '3 sets of 10-12 reps'
    }
]


function WorkoutRoutines() {
    const picArray = [IMG1, IMG2, IMG3, IMG4, IMG5];
    const [Progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (Progress < 100) {
                setProgress(prev => prev + 25)
            } else {
                setProgress(0)
            }
        }, 2000)
        return () => clearInterval(interval)
    }, [Progress])
    const selectImage = () => {
        switch (true) {
            case (Progress === 0): return picArray[4]
            case (Progress >= 25 && Progress < 50): return picArray[3]
            case (Progress >= 50 && Progress < 75): return picArray[2]
            case (Progress >= 75 && Progress < 100): return picArray[1]
            case (Progress === 100): return picArray[0]
        }
    }
    return (
        
            <div className='workout-page'>
                <header className='mt-5'>
                    <div className='container h-100 d-flex align-items-center justify-content-center'>
                        <h1 className='text-light'>Workouts for you!</h1>
                    </div>
                </header>

                <div className="my-5">
                    <h2 className='text-center fs-1 mb-2 mb-lg-5 text-uppercase fw-bold text-success'>What happens if you start workout with us!</h2>
                    <h2>Your progress: {Progress} %</h2>
                    <img src={selectImage()} />
                    <div className="my-5">

                    </div>
                </div>

                <div className="my-5">
                    <h1 className='text-center fs-1 mb-2 mb-lg-5 text-uppercase fw-bold'>Free Training Plan For You!</h1>
                </div>

                <div className='monday my-5'>
                    <div className='container'>
                        <div className="my-5">

                        </div>

                        <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Monday</h2>
                        <div className='row flex-column-reverse flex-lg-row'>

                            <div className='text-center fs-1 mb-4 mb-lg-2  fw-bold text-success'>
                                {monday.map((monday) => (
                                    <div key={monday.id}>
                                        <Card className='border-0'>
                                            <CardBody>
                                                <CardTitle className='text-center fs-3'>
                                                    {monday.name}
                                                </CardTitle>
                                                <CardText className='text-center fs-5'>
                                                    {monday.description}
                                                </CardText>
                                                <CardText className='text-center fs-3 fw-bold text-success'>
                                                    {monday.reps}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-2'>
                    <div className='container'>
                        <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Tuesday</h2>
                        <div className='row flex-column-reverse flex-lg-row'>

                            <div className='text-center fs-1 mb-4 mb-lg-2  fw-bold text-success'>
                                {tuesday.map((tuesday) => (
                                    <div key={tuesday.id}>
                                        <Card className='border-0'>
                                            <CardBody>
                                                <CardTitle className='text-center fs-3'>
                                                    {tuesday.name}
                                                </CardTitle>
                                                <CardText className='text-center fs-5'>
                                                    {tuesday.description}
                                                </CardText>
                                                <CardText className='text-center fs-3 fw-bold text-success'>
                                                    {tuesday.reps}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='monday my-5'>
                    <div className='container'>
                        <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Thursday</h2>
                        <div className='row flex-column-reverse flex-lg-row'>

                            <div className='text-center fs-1 mb-4 mb-lg-2  fw-bold text-success'>
                                {monday.map((monday) => (
                                    <div key={monday.id}>
                                        <Card className='border-0'>
                                            <CardBody>
                                                <CardTitle className='text-center fs-3'>
                                                    {monday.name}
                                                </CardTitle>
                                                <CardText className='text-center fs-5'>
                                                    {monday.description}
                                                </CardText>
                                                <CardText className='text-center fs-3 fw-bold text-success'>
                                                    {monday.reps}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='monday my-5'>
                    <div className='container'>
                        <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Friday</h2>
                        <div className='row flex-column-reverse flex-lg-row'>

                            <div className='text-center fs-1 mb-4 mb-lg-2  fw-bold text-success'>
                                {monday.map((monday) => (
                                    <div key={monday.id}>
                                        <Card className='border-0'>
                                            <CardBody>
                                                <CardTitle className='text-center fs-3'>
                                                    {monday.name}
                                                </CardTitle>
                                                <CardText className='text-center fs-5'>
                                                    {monday.description}
                                                </CardText>
                                                <CardText className='text-center fs-3 fw-bold text-success'>
                                                    {monday.reps}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
    );
}

export default WorkoutRoutines;