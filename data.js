// ==========================================================================
// 3-Month Ankle-Safe Gym Coach - Core Database with 3-Step Posture & Videos
// ==========================================================================

const USER_PROFILE = {
  name: "Arjun (Personal Transformation)",
  age: 27,
  heightCm: 182,
  heightFt: "6'0\"",
  startWeightKg: 93.0,
  targetWeightKg: 75.0,
  milestone3MoKg: 84.0,
  targetPhysique: "Clean, compact, tight-waisted, dense relative strength & sharp posture (NOT bulky bodybuilding)",
  lifestyle: "9-Hour Desk Job (10:00 AM - 7:00 PM) - Scapular retraction, thoracic extension, deep core bracing priority",
  schedule: "6 Days/Week (Mon–Sat), Sunday complete rest. 60–80 mins/session",
  orthopedicStatus: "Left Ankle Post-ORIF (March 2026). Medial plate, fibular rod, 2 intact distal syndesmotic screws. Prone to mild inward tilt / outer-border foot roll. Zero high-impact, zero forced ankle dorsiflexion.",
  dietTarget: {
    calories: 1950,
    proteinGrams: 145,
    carbsGrams: 180,
    fatGrams: 55,
    waterLiters: 3.5,
    rules: "Strictly NO Chicken, NO Eggs. Home-cooked Indian diet: Soya chunks, low-fat paneer, Greek yogurt/curd, dal, sprouts, milk, peanuts, fish/non-chicken meat."
  }
};

const FORBIDDEN_EXERCISES = [
  { name: "Running & Jogging", reason: "Excessive ground reaction shock wave (2.5x bodyweight) through healing syndesmosis." },
  { name: "Jump Rope & Box Jumps", reason: "Explosive ankle plantarflexion & landing torsion can stress distal syndesmotic screws." },
  { name: "Burpees & Jumping Jacks", reason: "Uncontrolled dynamic impact and multi-planar ankle shearing." },
  { name: "Heavy Barbell Squats", reason: "Requires acute left ankle dorsiflexion under heavy load, causing anterior impingement." },
  { name: "Walking & Bulgarian Split Lunges", reason: "High rear-foot shearing and unstable rotational ankle torque." },
  { name: "Standing Heavy Calf Raises", reason: "Direct focal shearing on fibular rod and screw heads under maximum leverage." },
  { name: "BOSU Balls & Unstable Wobble Boards", reason: "Dangerous uncontrolled ankle inversion can rupture healing syndesmotic ligaments." },
  { name: "Treadmill Inclines > 0%", reason: "Forced extreme dorsiflexion pinches the anterior ankle capsule against the plate." }
];

const ANKLE_PREP_ROUTINE = [
  {
    id: "prep-1",
    title: "1. Seated Ankle Pumps & Controlled Circles",
    sets: "2 sets",
    reps: "15 pumps + 10 controlled slow circles each direction",
    image: "assets/ankle_eversion.jpg",
    videoQuery: "seated ankle pumps and circles physical therapy shorts",
    purpose: "Mobilizes synovial fluid around titanium plates and gently wakes up left peroneal nerve pathway.",
    postureSteps: {
      step1: { title: "Step 1: Setup", desc: "Sit tall on bench edge. Extend left knee slightly so left foot hovers freely 4 inches off the floor." },
      step2: { title: "Step 2: Linear Pumps", desc: "Smoothly point toes forward like depressing a gas pedal, then pull toes back towards shin without forcing." },
      step3: { title: "Step 3: 360° Rotations", desc: "Perform 10 slow clockwise and 10 counter-clockwise circles. The knee must remain stationary; all motion originates inside the ankle mortise." }
    },
    cues: [
      "Sit tall on bench with left leg extended slightly forward, heel hovering.",
      "Pump foot down (point toes like gas pedal), then pull toes up smoothly to neutral.",
      "Perform slow, deliberate 360° circles: 10 clockwise, 10 counter-clockwise.",
      "Keep the knee completely still; all motion must originate at the talocrural joint."
    ]
  },
  {
    id: "prep-2",
    title: "2. Resistance-Band Ankle Eversion (2s Hold)",
    sets: "3 sets",
    reps: "15 reps with deliberate 2-second peak isometric hold",
    videoQuery: "resistance band ankle eversion physical therapy shorts",
    image: "assets/ankle_eversion.jpg",
    purpose: "Activates and hypertrophies the Peroneus Longus & Brevis to permanently stop the left outer-border rolling tendency.",
    postureSteps: {
      step1: { title: "Step 1: Anchor & Stance", desc: "Sit with legs extended. Loop light mini-band around both forefeet, or anchor band medially. Pin left heel firmly to floor." },
      step2: { title: "Step 2: Outward Rotation", desc: "Rotate left forefoot outward and upward against band tension, pointing the pinky toe toward the wall." },
      step3: { title: "Step 3: 2s Peak Hold & Reset", desc: "Squeeze the outer shin (peroneal muscles) for 2 strict seconds. Resist the band slowly over 3 seconds back to neutral." }
    },
    cues: [
      "Sit on floor or bench. Loop light mini-band around both forefeet, or anchor band to a solid post to your medial side.",
      "Keep left heel firmly planted into the floor as an anchor pivot.",
      "Rotate forefoot outwards against band tension, pointing pinky toe up and out.",
      "HOLD the peak contraction for 2 strict seconds feeling the outer shin / calf fire.",
      "Return slowly in 3 seconds. DO NOT let the band snap your foot inward."
    ]
  },
  {
    id: "prep-3",
    title: "3. Gentle Seated Towel Calf & Soleus Stretch",
    sets: "2 sets",
    reps: "25 seconds gentle hold per leg",
    image: "assets/ankle_eversion.jpg",
    videoQuery: "seated towel calf stretch achilles physical therapy shorts",
    purpose: "Decompresses Achilles tendon and soleus tension safely without bodyweight compressive stress.",
    postureSteps: {
      step1: { title: "Step 1: Setup", desc: "Sit on mat or bench with left leg straight. Loop a gym towel around the balls of your left foot (not the arch)." },
      step2: { title: "Step 2: Gentle Pull", desc: "Holding towel ends in each hand, gently pull back until a pleasant, mild stretch develops in the mid-calf belly." },
      step3: { title: "Step 3: Stop-Pinch Check", desc: "CRITICAL: Stop pulling immediately if you sense ANY anterior pinching across the front of the ankle (syndesmotic screws)." }
    },
    cues: [
      "Sit with left leg extended straight. Wrap gym towel around the balls of your left foot (not the arch).",
      "Gently pull towel back until a mild, comfortable stretch is felt in the belly of the calf.",
      "CRITICAL: STOP immediately if you feel ANY anterior pinch across the front of the ankle (syndesmosis screws).",
      "Keep toes relaxed, jaw unclenched, deep diaphragmatic breathing."
    ]
  },
  {
    id: "prep-4",
    title: "4. Supported Big-Toe-Grounded Heel Raises",
    sets: "2 sets",
    reps: "12 controlled reps (3s up, 2s peak hold, 3s down)",
    image: "assets/ankle_eversion.jpg",
    videoQuery: "wall supported heel raises big toe pressure shorts",
    purpose: "Re-educates medial column weight distribution, directly stopping the outer-border rolling habit.",
    postureSteps: {
      step1: { title: "Step 1: Support Stance", desc: "Stand facing a wall or power rack with both hands flat for balance support. Feet hip-width apart." },
      step2: { title: "Step 2: Big-Toe Mound Drive", desc: "Focus 80% of your foot pressure into the 1st Metatarsal (base of big toe). Rise smoothly onto balls of feet." },
      step3: { title: "Step 3: Anti-Inversion Lock", desc: "Hold peak elevation for 2 seconds. Verify ankles are locked laser-straight with ZERO outer-border rolling. Lower in 3s." }
    },
    cues: [
      "Stand facing a wall or sturdy power rack, both hands flat for balance support.",
      "Focus 80% of your foot pressure into the 1st Metatarsal (base mound of big toe).",
      "Rise smoothly onto toes, keeping ankles locked straight—DO NOT let left ankle roll outward.",
      "Hold the peak contraction for 2 solid seconds with full big-toe ground contact.",
      "Lower under control in 3 seconds flat."
    ]
  }
];

// Complete 6-Day Weekly Workout Split
const WORKOUT_SPLIT = {
  1: {
    dayName: "Monday",
    title: "Day 1: Upper Push & Core Stability",
    subtitle: "Pectorals, Anterior/Lateral Delts, Triceps + Anti-Rotation Core + Flat Cardio",
    sessionDuration: "65–75 mins",
    cardioBlock: "15–20 min Flat 0% Treadmill Walk at 4.5–4.8 km/h (Strict upright desk-countering posture, conscious big-toe push-off)",
    exercises: [
      {
        id: "d1-e1",
        name: "Incline Dumbbell Bench Press (30°)",
        targetMuscles: "Clavicular Upper Chest, Anterior Deltoids, Triceps",
        muscleTags: {
          primary: ["Upper Chest (Clavicular Pectoral)"],
          secondary: ["Anterior Deltoid", "Triceps Brachii"],
          ankleSafety: ["Flat Tripod Foot", "Zero Dorsiflexion Torque"]
        },
        image: "assets/incline_db_press.jpg",
        videoQuery: "how to incline dumbbell press form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Bench & Grip", desc: "Set bench to 30° incline. Sit deep with dumbbells resting on thighs. Kick weights up, retract shoulder blades, and plant both feet flat on floor." },
          step2: { title: "Step 2: Descent & Elbow Path", desc: "Lower dumbbells over 3 seconds with elbows tucked at 45° to torso (not flared out at 90°). Feel deep stretch across upper chest." },
          step3: { title: "Step 3: Drive & Ankle Tripod", desc: "Exhale and press dumbbells up and slightly inward. Drive through left foot with 80% pressure on big-toe mound. Zero ankle rolling." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "16 kg each hand (16+16 kg DBs • Warmup: 10–12.5 kg)", tempo: "3-1-1-0", restSec: 75 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "20 kg each hand (20+20 kg DBs)", tempo: "3-1-1-0", restSec: 90 },
          m3: { sets: 4, reps: "6–8 reps (Explosive)", weightKg: "22 kg each hand (22+22 kg DBs)", tempo: "2-0-X-0", restSec: 90 }
        },
        cues: {
          setup: "Set adjustable bench to 30° incline. Pick two identical dumbbells (e.g. 16 kg in left hand + 16 kg in right hand). Kick dumbbells up to shoulders.",
          tripodFoot: "Ground left foot into floor with equal weight on heel, big-toe mound, and pinky-toe mound. Do not cross ankles or tuck feet back.",
          breathingTempo: "Inhale and brace core on way down (3s). Pause 1s at bottom with elbows 45° to torso. Exhale and drive up crisply (1s).",
          mistakes: "Do not flare elbows to 90° (impinges shoulders). Do not bounce weights off chest. Keep glutes and upper back glued to bench."
        },
        busyGymSwap: {
          name: "Incline Smith Machine Press",
          videoQuery: "incline smith machine press form shorts gym",
          reason: "Identical chest line of pull with fixed safety path when free dumbbells are taken.",
          adjustCues: "Position bench so bar aligns with collarbones. Unrack with neutral wrists."
        },
        stiffAnkleSwap: {
          name: "Seated Chest-Supported Incline Machine Press",
          videoQuery: "seated incline machine chest press form shorts",
          reason: "Zero foot driving demand; isolates upper chest completely seated.",
          adjustCues: "Rest feet lightly without pressing into floor; all power generated through braced torso."
        }
      },
      {
        id: "d1-e2",
        name: "Seated Machine Chest Press (Back-Supported Pin Machine)",
        targetMuscles: "Sternal Mid-Chest, Triceps, Serratus Anterior",
        muscleTags: {
          primary: ["Mid-Chest (Sternal Head)"],
          secondary: ["Triceps", "Serratus Anterior"],
          ankleSafety: ["Unloaded Lower Limbs", "Spine Supported"]
        },
        image: "assets/chest_supported_machine_press.jpg",
        videoQuery: "seated machine chest press proper form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Seat Height & Backrest Setup", desc: "Adjust seat height so handles align directly with your mid-chest / nipple line. Sit deep with your UPPER BACK and HIPS pressed firmly against the backrest pad (chest proud, NOT chest against pad)." },
          step2: { title: "Step 2: Press & Elbow Tuck", desc: "Inhale, retract shoulder blades, and push handles forward until arms are 95% straight without locking elbows. Keep elbows tucked at 45° to torso." },
          step3: { title: "Step 3: 3-Second Controlled Eccentric", desc: "Resist the weight stack returning over 3 full seconds. Feel deep chest stretch without letting shoulders roll forward." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "45 kg (Total Machine Stack • Warmup: 25–30 kg)", tempo: "3-1-1-0", restSec: 75 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "55 kg (Total Machine Stack)", tempo: "3-1-1-0", restSec: 90 },
          m3: { sets: 4, reps: "6–8 reps", weightKg: "62.5 kg (Total Machine Stack)", tempo: "2-0-1-0", restSec: 90 }
        },
        cues: {
          setup: "Sit back with spine and hips flush against the backrest pad. Adjust seat so handles are at nipple level. Grab horizontal or neutral handles.",
          tripodFoot: "Keep feet resting flat on floor/base pads without hyperextending left ankle. Zero foot shear.",
          breathingTempo: "Inhale, retract shoulder blades, press handles away forward until arms are almost straight without locking elbows. Exhale.",
          mistakes: "Do not let shoulders round forward at the end of the press. Keep your chest high against the back pad."
        },
        busyGymSwap: {
          name: "Seated Flat Dumbbell Bench Press",
          videoQuery: "flat dumbbell bench press form shorts gym",
          reason: "Classic bilateral chest press with stable flat foot placement.",
          adjustCues: "Keep dumbbells slightly turned at 45° to protect rotator cuffs."
        },
        stiffAnkleSwap: {
          name: "Seated Cable Chest Press (Bench Supported)",
          videoQuery: "seated cable chest press bench form shorts",
          reason: "Zero ground shear stress; pure chest isolation against backrest.",
          adjustCues: "Set cables at chest height; press forward smoothly."
        }
      },
      {
        id: "d1-e3",
        name: "Seated Dumbbell Shoulder Press",
        targetMuscles: "Anterior Deltoid, Medial Deltoid, Triceps, Upper Traps",
        muscleTags: {
          primary: ["Anterior & Medial Deltoids"],
          secondary: ["Triceps Brachii", "Upper Trapezius"],
          ankleSafety: ["Seated 80° Backrest", "Vertical Forearms"]
        },
        image: "assets/seated_db_shoulder_press.jpg",
        videoQuery: "seated dumbbell shoulder press proper form shorts",
        postureSteps: {
          step1: { title: "Step 1: Bench Angle", desc: "Set bench to 80°–85° (not 90° to avoid shoulder impingement). Sit deep with lower back supported by pad." },
          step2: { title: "Step 2: Grip & Starting Depth", desc: "Hold dumbbells at ear height with semi-neutral grip (palms turned 30° inward). Forearms strictly vertical." },
          step3: { title: "Step 3: Overhead Drive", desc: "Exhale and press dumbbells overhead in a smooth arc without clanking weights at top. Inhale down in 3 seconds." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "14 kg each hand (14+14 kg DBs • Warmup: 8–10 kg)", tempo: "3-1-1-0", restSec: 75 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "18 kg each hand (18+18 kg DBs)", tempo: "3-1-1-0", restSec: 90 },
          m3: { sets: 4, reps: "6–8 reps", weightKg: "20 kg each hand (20+20 kg DBs)", tempo: "2-0-1-0", restSec: 90 }
        },
        cues: {
          setup: "Set upright bench to 80°–85° (not fully 90° to prevent shoulder impingement). Sit deep with lower back supported.",
          tripodFoot: "Both feet flat on floor, knees at 90°. Zero ankle rolling.",
          breathingTempo: "Hold dumbbells at ear level with neutral or semi-neutral grip (palms angled slightly inward). Press up overhead smoothly.",
          mistakes: "Do not arch lower back excessively off the back pad. Keep ribs pinned down."
        },
        busyGymSwap: {
          name: "Seated Machine Overhead Press",
          videoQuery: "seated machine shoulder press form shorts",
          reason: "Fixed vertical plane provides identical deltoid stimulation.",
          adjustCues: "Adjust seat so handles start just above collarbone level."
        },
        stiffAnkleSwap: {
          name: "Seated Neutral-Grip Dumbbell Arnold Press",
          videoQuery: "seated arnold press proper form shorts",
          reason: "Smooth rotational pattern requires lower absolute weight with high muscular tension.",
          adjustCues: "Start with palms facing chest, rotate out smoothly as you press overhead."
        }
      },
      {
        id: "d1-e4",
        name: "Cable Lateral Raise",
        targetMuscles: "Lateral Deltoid (Shoulder Width & Compact Silhouette)",
        muscleTags: {
          primary: ["Lateral Deltoid (Side Shoulder)"],
          secondary: ["Supraspinatus"],
          ankleSafety: ["Constant Cable Tension", "Soft Knees"]
        },
        image: "assets/cable_lateral_raise.jpg",
        videoQuery: "cable lateral raise form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Cable Alignment", desc: "Set cable pulley to wrist/hip height. Stand tall with soft knees or sit sideways on a flat bench." },
          step2: { title: "Step 2: Elbow Lead", desc: "Lead with your elbow, raising arm out to the side until parallel to floor (shoulder height). Keep thumbs slightly down." },
          step3: { title: "Step 3: 1s Peak Squeeze", desc: "Hold peak contraction for 1 full second without shrugging traps. Lower under control over 2 full seconds." }
        },
        phaseData: {
          m1: { sets: 3, reps: "12–15 reps", weightKg: "5 kg", tempo: "2-1-1-1", restSec: 60 },
          m2: { sets: 4, reps: "10–12 reps", weightKg: "7.5 kg", tempo: "2-1-1-1", restSec: 60 },
          m3: { sets: 4, reps: "8–10 reps + drop set", weightKg: "9 kg", tempo: "2-1-1-0", restSec: 60 }
        },
        cues: {
          setup: "Set cable pulley to lowest position or wrist height. Stand tall or sit on bench sideways to cable column.",
          tripodFoot: "If standing, athletic shoulder-width stance with knees unlocked; if seated, feet relaxed flat.",
          breathingTempo: "Lead with elbows and raise to parallel (shoulder height). Hold peak for 1 full second. Lower over 2 full seconds.",
          mistakes: "Do not shrug with upper traps. Think of pushing hands outward toward the side walls."
        },
        busyGymSwap: {
          name: "Seated Dumbbell Lateral Raise",
          videoQuery: "seated dumbbell lateral raise form shorts",
          reason: "Removes all lower body cheating and targets side delts cleanly.",
          adjustCues: "Sit at edge of flat bench with slight forward lean (10°)."
        },
        stiffAnkleSwap: {
          name: "Seated Lateral Raise Machine",
          videoQuery: "seated lateral raise machine form shorts",
          reason: "Complete upper body isolation; zero foot stabilizer demand.",
          adjustCues: "Keep forearms flush with pads; push outward."
        }
      },
      {
        id: "d1-e5",
        name: "Cable Rope Triceps Pushdown",
        targetMuscles: "Triceps (Lateral & Medial Heads)",
        muscleTags: {
          primary: ["Triceps Brachii (Lateral/Medial)"],
          secondary: ["Anconeus"],
          ankleSafety: ["Hips Hinged", "Zero Axial Joint Loading"]
        },
        image: "assets/cable_triceps_pushdown.jpg",
        videoQuery: "cable rope triceps pushdown form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Elbow Pin", desc: "Attach double-rope to high pulley. Hinge hips back 15°. Pin elbows tightly to your ribcage; they must not drift." },
          step2: { title: "Step 2: Pushdown & Flare", desc: "Push rope down smoothly. At bottom, flare rope ends outward past your outer thighs to maximize peak lock." },
          step3: { title: "Step 3: 1s Lockout & 3s Up", desc: "Squeeze triceps for 1 full second. Allow rope to rise until forearms touch biceps over 3 slow seconds." }
        },
        phaseData: {
          m1: { sets: 3, reps: "12–15 reps", weightKg: "17.5 kg", tempo: "3-1-1-1", restSec: 60 },
          m2: { sets: 4, reps: "8–10 reps", weightKg: "22.5 kg", tempo: "3-1-1-1", restSec: 60 },
          m3: { sets: 4, reps: "8–10 reps", weightKg: "27.5 kg", tempo: "2-0-1-1", restSec: 60 }
        },
        cues: {
          setup: "Attach double-rope to high pulley. Grip rope ends with neutral grip, elbows pinned to ribcage.",
          tripodFoot: "Even stance, hips hinged back 15°. Left ankle resting naturally flat with zero roll.",
          breathingTempo: "Exhale and push rope down. At the bottom, flare rope outward past your hips. Squeeze triceps hard for 1s. Inhale up (3s).",
          mistakes: "Do not let elbows drift forward and backward like a pendulum. Keep upper arms completely still."
        },
        busyGymSwap: {
          name: "Straight Bar Cable Pushdown",
          videoQuery: "straight bar tricep pushdown form shorts",
          reason: "Enables heavy triceps overload using standard bar attachment.",
          adjustCues: "Keep wrists straight, push bar straight down to thighs."
        },
        stiffAnkleSwap: {
          name: "Seated Overhead Dumbbell Triceps Extension",
          videoQuery: "seated overhead dumbbell tricep extension form shorts",
          reason: "Done seated with feet resting comfortably; deep stretch on long head.",
          adjustCues: "Use both hands under top plate of a single dumbbell."
        }
      },
      {
        id: "d1-e6",
        name: "Core Superset: Dead Bugs + Seated Pallof Press",
        targetMuscles: "Transverse Abdominis, Obliques (Tight-Waist Bracing)",
        muscleTags: {
          primary: ["Transverse Abdominis (Deep Core)"],
          secondary: ["Internal & External Obliques"],
          ankleSafety: ["Floor & Seated", "Zero Ankle Impact"]
        },
        image: "assets/dead_bug_core.jpg",
        videoQuery: "how to do dead bugs proper form core shorts",
        postureSteps: {
          step1: { title: "Step 1: Dead Bug Lumbar Glue", desc: "Lie on mat with arms up and knees bent 90°. Press lower back completely flat into floor (zero arch allowed)." },
          step2: { title: "Step 2: Cross-Body Extension", desc: "Slowly extend right arm overhead and left leg forward hovering 2 inches off mat. Exhale all air." },
          step3: { title: "Step 3: Seated Pallof Transition", desc: "Sit tall on bench next to cable pulley. Press D-handle straight out from chest and hold resisting rotation." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10 dead bugs/side + 12 pallof presses", weightKg: "Bodyweight / 7.5 kg cable", tempo: "Slow 2s hold", restSec: 60 },
          m2: { sets: 3, reps: "12 dead bugs/side + 12 pallof presses", weightKg: "Bodyweight / 10 kg cable", tempo: "Slow 3s hold", restSec: 60 },
          m3: { sets: 3, reps: "12 dead bugs/side + 15 pallof presses", weightKg: "Bodyweight / 12.5 kg cable", tempo: "Slow 3s hold", restSec: 60 }
        },
        cues: {
          setup: "Dead bug: Lie on gym mat, knees at 90°, arms pointing to ceiling. Pallof: Sit tall on bench perpendicular to cable machine.",
          tripodFoot: "Floor-based and seated core work eliminates all ankle axial impact.",
          breathingTempo: "Press lower back completely flat into floor on Dead Bug (zero arch). Inhale through nose, exhale hard through mouth like blowing through a straw.",
          mistakes: "Do not let lower back lift off the floor during Dead Bug. Do not rotate torso during Pallof."
        },
        busyGymSwap: {
          name: "Floor Hollow-Body Hold + Banded Pallof Press",
          videoQuery: "hollow body hold proper form shorts",
          reason: "Can be done anywhere with a mini-band on a bench post.",
          adjustCues: "Tuck knees to chest if hollow body is too taxing."
        },
        stiffAnkleSwap: {
          name: "Bench-Elevated Reverse Crunches + Seated Cable Woodchoppers",
          videoQuery: "reverse crunches proper form shorts",
          reason: "Completely unloaded lower limbs.",
          adjustCues: "Keep knees bent 90° and tilt pelvis toward ribs."
        }
      }
    ]
  },
  2: {
    dayName: "Tuesday",
    title: "Day 2: Lower A — Ankle-Safe Quad & Glute Overload",
    subtitle: "High-Foot Leg Press, Leg Extension, Hip Thrust, Hip Abduction + Bike Cardio",
    sessionDuration: "65–75 mins",
    cardioBlock: "15–20 min Stationary Upright Bike at 65–75 RPM (Low to moderate resistance, flat foot secured in pedal cage, zero impact)",
    exercises: [
      {
        id: "d2-e1",
        name: "Barbell / Machine Hip Thrust",
        targetMuscles: "Gluteus Maximus, Hamstrings, Core Bracing",
        muscleTags: {
          primary: ["Gluteus Maximus"],
          secondary: ["Hamstrings", "Erector Spinae"],
          ankleSafety: ["CRITICAL: 90° Vertical Shin", "Zero Ankle Dorsiflexion Torque"]
        },
        image: "assets/hip_thrust.jpg",
        videoQuery: "barbell hip thrust proper form vertical shin shorts",
        postureSteps: {
          step1: { title: "Step 1: Bench & Shin Check", desc: "Rest upper back against bench edge. Position barbell across hip crease. Feet flat on floor so shins are PERFECTLY VERTICAL at top." },
          step2: { title: "Step 2: Big-Toe Mound Drive", desc: "Drive hips up through heels and 1st Metatarsal (base of big toe). Do not let left foot roll onto outer pinky border." },
          step3: { title: "Step 3: Glute Lockout & Chin Tuck", desc: "Lock hips into full 180° extension. Tuck chin forward looking at knees. Hold 1s. Lower smoothly in 3s." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "40 kg", tempo: "3-1-2-1", restSec: 90 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "60 kg", tempo: "3-1-2-1", restSec: 90 },
          m3: { sets: 4, reps: "6–8 reps (Heavy Peak Hold)", weightKg: "75 kg", tempo: "2-0-1-2", restSec: 90 }
        },
        cues: {
          setup: "Position upper back (scapulae) against edge of bench. Place padded barbell or machine arm across hip crease.",
          tripodFoot: "CRITICAL: Place feet flat on floor so shins are PERFECTLY VERTICAL at peak hip extension. Vertical shins place 0° dorsiflexion torque on your left ankle.",
          breathingTempo: "Inhale at bottom. Drive through both heels and big-toe mounds. Squeeze glutes to full lockout. Tuck chin forward like holding an egg. Exhale at top.",
          mistakes: "Do not hyperextend lumbar spine. Do not place feet too close to bench (that pushes knees forward and strains the left ankle)."
        },
        busyGymSwap: {
          name: "Single-Leg Glute Bridge on Bench (Weighted DB on Hip)",
          videoQuery: "single leg glute bridge form shorts",
          reason: "High unilateral glute contraction using only a dumbbell and a flat bench.",
          adjustCues: "Keep left shin vertical, focus on big-toe ground drive."
        },
        stiffAnkleSwap: {
          name: "Floor Glute Bridge with Small Towel Roll under Left Forefoot",
          videoQuery: "floor glute bridge form shorts",
          reason: "Zero dorsiflexion angle; pure glute bridge on comfortable mat.",
          adjustCues: "Place feet flat and lift hips using glutes only."
        }
      },
      {
        id: "d2-e2",
        name: "Seated Leg Extension",
        targetMuscles: "Quadriceps (Rectus Femoris, Vastus Medialis/Lateralis)",
        muscleTags: {
          primary: ["Quadriceps (All 4 Heads)"],
          secondary: ["Vastus Medialis Oblique (VMO)"],
          ankleSafety: ["Pad Above Ankle Joint", "Zero Screw Shear"]
        },
        image: "assets/seated_leg_extension.jpg",
        videoQuery: "seated leg extension proper form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Machine Axis Alignment", desc: "Set back pad so knee joints align directly with machine pivot axis. Roller pad rests on lower shins (ABOVE the ankle and screws)." },
          step2: { title: "Step 2: Neutral Ankle Hold", desc: "Keep left ankle relaxed at a comfortable neutral 90° angle. Do NOT forcefully flex toes up." },
          step3: { title: "Step 3: Smooth Knee Extension", desc: "Exhale and extend knees to full lockout. Squeeze quads for 1 full second. Lower under strict 3-second eccentric." }
        },
        phaseData: {
          m1: { sets: 3, reps: "12–15 reps", weightKg: "35 kg", tempo: "3-1-1-1", restSec: 75 },
          m2: { sets: 4, reps: "8–10 reps", weightKg: "45 kg", tempo: "3-1-1-1", restSec: 75 },
          m3: { sets: 4, reps: "8–10 reps + 2s isometric hold", weightKg: "52.5 kg", tempo: "3-2-1-0", restSec: 75 }
        },
        cues: {
          setup: "Adjust machine back pad so knee joints align directly with machine pivot axis. Shin pad should sit on lower shins (above ankle joint, never on foot).",
          tripodFoot: "CRITICAL: Keep left ankle relaxed at a comfortable neutral 90° angle. DO NOT flex toes forcefully up.",
          breathingTempo: "Exhale and extend knees smoothly to full extension. Hold peak for 1 second. Lower under control over 3 seconds. Inhale.",
          mistakes: "Do not kick the weight up violently. Do not place the shin pad onto the ankle joint or titanium plate site."
        },
        busyGymSwap: {
          name: "Seated Dumbbell Quad Squeeze Extension",
          videoQuery: "seated dumbbell leg extension form shorts",
          reason: "Sit on high bench, clamp light dumbbell between arches, extend knees smoothly.",
          adjustCues: "Use 8–10 kg dumbbell; focus on quad burn."
        },
        stiffAnkleSwap: {
          name: "Isometric Wall Sit with 90° Knee Angle",
          videoQuery: "wall sit proper form shorts",
          reason: "Zero movement at ankle; holds quad under strict static tension.",
          adjustCues: "Keep back flat on wall, knees over heels, shins completely vertical."
        }
      },
      {
        id: "d2-e3",
        name: "High-Foot Machine Leg Press",
        targetMuscles: "Glutes, Hamstrings, Quads (Ankle-Sparing Compound)",
        muscleTags: {
          primary: ["Glutes & Quads"],
          secondary: ["Hamstrings"],
          ankleSafety: ["CRITICAL: HIGH Foot Placement", "Protects Syndesmosis"]
        },
        image: "assets/high_foot_leg_press.jpg",
        videoQuery: "high foot placement leg press glutes form shorts",
        postureSteps: {
          step1: { title: "Step 1: High & Wide Footing", desc: "CRITICAL: Place feet NEAR THE TOP of the sled footplate, shoulder-width apart, toes turned out 15°." },
          step2: { title: "Step 2: 90° Knee Flexion", desc: "Lower sled until knees reach 90°. Because feet are high, ankle dorsiflexion is minimal (stays ~90° without pinch)." },
          step3: { title: "Step 3: Heel & Big-Toe Drive", desc: "Press sled away driving through heels and 1st Metatarsal big-toe mounds. Never lock knees at top." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "80 kg", tempo: "3-1-1-0", restSec: 90 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "110 kg", tempo: "3-1-1-0", restSec: 90 },
          m3: { sets: 4, reps: "6–8 reps", weightKg: "130 kg", tempo: "2-0-1-0", restSec: 90 }
        },
        cues: {
          setup: "Sit deep in sled seat. CRITICAL: Place both feet HIGH AND WIDE on the sled footplate with toes angled out 15°–20°.",
          tripodFoot: "By placing feet near the top of the plate, knee flexion occurs without forcing ankle dorsiflexion! Ankle stays at ~90° throughout the entire stroke.",
          breathingTempo: "Inhale and lower sled smoothly until knees hit 90°. Pause 1s. Drive through heels and big-toe mounds. Never lock knees at top.",
          mistakes: "NEVER place feet low on the sled (this causes severe ankle dorsiflexion and syndesmosis shear). Keep lower back pressed flat into seat pad."
        },
        busyGymSwap: {
          name: "Seated Vertical Leg Press or Smith Machine High-Foot Press",
          videoQuery: "smith machine leg press high feet form shorts",
          reason: "Maintains high foot placement without ankle strain.",
          adjustCues: "Keep feet high on bar/sled; lower only to 90° knee angle."
        },
        stiffAnkleSwap: {
          name: "Assisted High-Bench Step-Ups (Flat Foot)",
          videoQuery: "dumbbell step ups proper form shorts",
          reason: "Step up onto a low 12-inch bench driving purely through heel and big toe.",
          adjustCues: "Hold handrails for balance; slow 3s descent."
        }
      },
      {
        id: "d2-e4",
        name: "Seated Hip Abduction Machine",
        targetMuscles: "Gluteus Medius, Tensor Fasciae Latae (Anti-Foot Rolling Guard)",
        muscleTags: {
          primary: ["Gluteus Medius (Outer Hip)"],
          secondary: ["Tensor Fasciae Latae"],
          ankleSafety: ["Pelvic Stability", "Directly Stops Outer Foot Roll"]
        },
        image: "assets/seated_hip_abduction.jpg",
        videoQuery: "seated hip abduction machine form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Forward Lean Setup", desc: "Sit with outer knees against pads. Lean torso forward 15° from hips to recruit upper glute medius fibers." },
          step2: { title: "Step 2: Smooth Spread", desc: "Exhale, drive knees outward as wide as comfortable. Feet rest lightly on pegs with zero push." },
          step3: { title: "Step 3: 2s Squeeze & Resist", desc: "Hold peak abduction for 2 full seconds. Resist the weight coming inward over 2 seconds." }
        },
        phaseData: {
          m1: { sets: 3, reps: "15 reps", weightKg: "40 kg", tempo: "2-1-2-1", restSec: 60 },
          m2: { sets: 4, reps: "12 reps", weightKg: "50 kg", tempo: "2-1-2-1", restSec: 60 },
          m3: { sets: 4, reps: "10–12 reps (2s squeeze)", weightKg: "57.5 kg", tempo: "2-2-1-0", restSec: 60 }
        },
        cues: {
          setup: "Sit tall with pads on the outside of your knees. Lean forward slightly from the hips (15°) to hit upper glute fibers.",
          tripodFoot: "Rest feet lightly on foot pegs without pushing. Movement is driven entirely by hips opening.",
          breathingTempo: "Exhale, drive knees outward as wide as comfortable. Hold for 1–2 seconds. Inhale and resist weight coming back in 2s.",
          mistakes: "Do not let the weight stack slam together between reps. Keep constant muscular tension."
        },
        busyGymSwap: {
          name: "Banded Seated Clamshells on Bench",
          videoQuery: "banded seated clamshells form shorts",
          reason: "Loop heavy resistance band just above knees while seated on bench.",
          adjustCues: "Push knees out against band with 2s hold."
        },
        stiffAnkleSwap: {
          name: "Side-Lying Straight Leg Raise",
          videoQuery: "side lying leg lift glute medius form shorts",
          reason: "Lie on right side on mat, raise left straight leg 30° with heel leading.",
          adjustCues: "Keep toe pointed slightly down or neutral; zero ankle load."
        }
      },
      {
        id: "d2-e5",
        name: "Core Superset: Bird-Dogs + Bench-Elevated Plank",
        targetMuscles: "Erector Spinae, Transverse Abdominis, Glutes",
        muscleTags: {
          primary: ["Erector Spinae", "Deep Core"],
          secondary: ["Gluteus Maximus"],
          ankleSafety: ["Elevated Bench", "Reduces Toe Shear by 40%"]
        },
        image: "assets/dead_bug_core.jpg",
        videoQuery: "bird dog exercise proper form shorts",
        postureSteps: {
          step1: { title: "Step 1: Bird-Dog Alignment", desc: "Hands under shoulders, knees under hips on mat. Reach opposite arm and leg in a straight laser line." },
          step2: { title: "Step 2: 3s Hold & Level Pelvis", desc: "Hold extended position for 3 seconds. Imagine balancing a glass of water on your lower back." },
          step3: { title: "Step 3: Bench-Elevated Plank", desc: "Forearms on flat bench. Elevating upper body reduces toe-joint compression on your left ankle by 40%." }
        },
        phaseData: {
          m1: { sets: 3, reps: "8 reps/side (3s hold) + 30s plank", weightKg: "Bodyweight", tempo: "3s peak hold", restSec: 60 },
          m2: { sets: 3, reps: "10 reps/side (3s hold) + 40s plank", weightKg: "Bodyweight", tempo: "3s peak hold", restSec: 60 },
          m3: { sets: 3, reps: "10 reps/side (3s hold) + 45s plank", weightKg: "Bodyweight", tempo: "3s peak hold", restSec: 60 }
        },
        cues: {
          setup: "Bird-Dog: All-fours on gym mat with knees under hips. Plank: Place forearms on flat bench to elevate upper body.",
          tripodFoot: "Bench elevation reduces gravitational shear on your toes and left ankle by 40% compared to floor planks!",
          breathingTempo: "Bird-dog: Reach opposite arm and leg in a straight line without tilting pelvis. Breathe steadily throughout plank.",
          mistakes: "Do not let lower back sag in plank. Squeeze glutes and tuck pelvis under."
        },
        busyGymSwap: {
          name: "Floor Dead Bugs + Side Plank on Forearm",
          videoQuery: "side plank proper form shorts",
          reason: "Floor alternatives requiring zero equipment.",
          adjustCues: "Stack knees or stagger feet to protect left ankle."
        },
        stiffAnkleSwap: {
          name: "Hands-and-Knees Quadruped Isometric Core Brace",
          videoQuery: "bear plank hold proper form shorts",
          reason: "Zero foot extension; pure kneeling anti-rotation stability.",
          adjustCues: "Gently lift knees 1 inch off mat and hold for 15 seconds."
        }
      }
    ]
  },
  3: {
    dayName: "Wednesday",
    title: "Day 3: Upper Pull & Desk-Posture Reset",
    subtitle: "Lat Pulldown, Chest-Supported Row, Face Pulls, Hammer Curls + Posture Walk",
    sessionDuration: "65–75 mins",
    cardioBlock: "18–22 min Flat 0% Treadmill Walk at 4.5–4.8 km/h (Thoracic open posture, chin tucked, 1st MTP big-toe rolling cue)",
    exercises: [
      {
        id: "d3-e1",
        name: "Neutral-Grip Lat Pulldown",
        targetMuscles: "Latissimus Dorsi, Teres Major, Biceps Brachii (Counters Rounded Desk Posture)",
        muscleTags: {
          primary: ["Latissimus Dorsi", "Teres Major"],
          secondary: ["Biceps Brachii", "Rhomboids"],
          ankleSafety: ["Seated Thigh Clamp", "Zero Ankle Load"]
        },
        image: "assets/lat_pulldown.jpg",
        videoQuery: "neutral grip lat pulldown proper form shorts",
        postureSteps: {
          step1: { title: "Step 1: Neutral V-Grip Attachment", desc: "Attach neutral parallel handles. Clamp thighs snugly under pad. Chest tall, spine neutral." },
          step2: { title: "Step 2: Elbows to Pockets", desc: "Inhale, expand ribcage. Pull elbows straight down and back towards your hip pockets, bringing handles to upper chest." },
          step3: { title: "Step 3: 1s Squeeze & 3s Stretch", desc: "Squeeze lats for 1 full second. Allow bar to rise over 3 seconds until you feel a full stretch under armpits." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "45 kg", tempo: "3-1-1-1", restSec: 75 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "55 kg", tempo: "3-1-1-1", restSec: 90 },
          m3: { sets: 4, reps: "6–8 reps", weightKg: "62.5 kg", tempo: "2-0-1-1", restSec: 90 }
        },
        cues: {
          setup: "Attach V-bar or parallel neutral-grip handles. Adjust thigh pad snug against thighs. Sit tall with chest lifted.",
          tripodFoot: "Feet flat on floor directly below knees. No foot rolling.",
          breathingTempo: "Inhale, expand chest. Drive elbows straight down toward back pockets. Pull bar to upper collarbone. Squeeze lats 1s. Inhale up (3s).",
          mistakes: "Do not swing torso backward beyond 15°. Keep movement pure lat contraction."
        },
        busyGymSwap: {
          name: "Seated Cable High-Row (Neutral Grip)",
          videoQuery: "seated cable high row form shorts",
          reason: "Targets identical lat angles while seated comfortably.",
          adjustCues: "Pull cable high to low into ribs."
        },
        stiffAnkleSwap: {
          name: "Supported Half-Kneeling Single-Arm Lat Pulldown",
          videoQuery: "half kneeling single arm lat pulldown form shorts",
          reason: "Takes all weight off left ankle; emphasizes lat stretch.",
          adjustCues: "Kneel with right knee down; left leg relaxed."
        }
      },
      {
        id: "d3-e2",
        name: "Chest-Supported Dumbbell / T-Bar Row",
        targetMuscles: "Rhomboids, Mid/Lower Traps, Posterior Deltoid (Desk Posture Antidote)",
        muscleTags: {
          primary: ["Rhomboids & Mid-Traps"],
          secondary: ["Rear Deltoids", "Lats"],
          ankleSafety: ["Pad Supports Torso", "Zero Lumbar Shear"]
        },
        image: "assets/chest_supported_row.jpg",
        videoQuery: "chest supported dumbbell row form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Prone Bench Angle", desc: "Set incline bench to 30°–45°. Lie face down with upper chest supported on pad, head extending above." },
          step2: { title: "Step 2: Walnut Scapular Squeeze", desc: "Pull dumbbells up and back with neutral grip. Pinch shoulder blades together like cracking a walnut between them." },
          step3: { title: "Step 3: 1s Hold & 3s Lower", desc: "Hold peak retraction for 1 second. Lower under complete muscular control over 3 seconds. Neck stays relaxed." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "16 kg each hand (16+16 kg DBs • Warmup: 10–12.5 kg)", tempo: "3-1-1-1", restSec: 75 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "20 kg each hand (20+20 kg DBs)", tempo: "3-1-1-1", restSec: 90 },
          m3: { sets: 4, reps: "6–8 reps", weightKg: "22 kg each hand (22+22 kg DBs)", tempo: "2-0-1-1", restSec: 90 }
        },
        cues: {
          setup: "Set incline bench to 30°–45°. Lie face down with chest supported on pad, head extending off the top.",
          tripodFoot: "Feet rest gently on floor behind you. Chest support takes 100% of bodyweight off your lumbar and left ankle!",
          breathingTempo: "Hang dumbbells with neutral grip. Exhale and pull elbows up and back. Pinch shoulder blades together like cracking a walnut. Hold 1s. Lower over 3s.",
          mistakes: "Do not crane neck backward. Keep cervical spine neutral."
        },
        busyGymSwap: {
          name: "Chest-Supported Machine Row (Wide or Neutral Grip)",
          videoQuery: "chest supported machine row form shorts",
          reason: "Pre-set fixed row machine with chest pad.",
          adjustCues: "Set chest pad so arms reach full extension without losing scapular contact."
        },
        stiffAnkleSwap: {
          name: "Seated Cable Row with Feet on Floor (Not Stretcher)",
          videoQuery: "seated cable row proper form shorts",
          reason: "Place feet gently on floor to avoid footplate dorsiflexion push.",
          adjustCues: "Keep chest tall, pull handle to navel."
        }
      },
      {
        id: "d3-e3",
        name: "Single-Arm Cable Row (Seated)",
        targetMuscles: "Unilateral Lat, Rotational Anti-Flexion Core",
        muscleTags: {
          primary: ["Unilateral Latissimus"],
          secondary: ["Rotational Core", "Biceps"],
          ankleSafety: ["Seated Stability", "Anti-Twist Bracing"]
        },
        image: "assets/seated_cable_row.jpg",
        videoQuery: "single arm seated cable row form shorts",
        postureSteps: {
          step1: { title: "Step 1: Seated Stance", desc: "Sit on bench facing low cable column with single D-handle. Keep torso upright, chest open, shoulders level." },
          step2: { title: "Step 2: Full Stretch to Row", desc: "Reach forward for a full lat stretch (3s). Pull elbow straight back into your hip crease while palm rotates neutral." },
          step3: { title: "Step 3: Anti-Rotation Hold", desc: "Squeeze lat tightly for 1 second. Resist your torso from twisting toward the cable. Return smoothly." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps/side", weightKg: "20 kg", tempo: "3-1-1-1", restSec: 60 },
          m2: { sets: 4, reps: "8–10 reps/side", weightKg: "25 kg", tempo: "3-1-1-1", restSec: 75 },
          m3: { sets: 4, reps: "8 reps/side", weightKg: "30 kg", tempo: "2-0-1-1", restSec: 75 }
        },
        cues: {
          setup: "Sit on seated row bench or flat bench facing low cable pulley with single D-handle.",
          tripodFoot: "Keep feet flat without locking knees. Core firmly braced.",
          breathingTempo: "Reach forward for a full lat stretch (3s). Pull elbow straight back into hip pocket with palm turning neutral. Squeeze for 1 second. Exhale.",
          mistakes: "Do not twist your entire torso to yank the weight. Resist rotation with your core."
        },
        busyGymSwap: {
          name: "Single-Arm Dumbbell Row on Bench (Knee Supported)",
          videoQuery: "single arm dumbbell row bench form shorts",
          reason: "Support right knee on bench while left foot stays grounded flat.",
          adjustCues: "Keep spine parallel to floor."
        },
        stiffAnkleSwap: {
          name: "Seated Resistance Band Single-Arm Row",
          videoQuery: "seated band row form shorts",
          reason: "Zero footplate pressure; pure smooth linear cable/band resistance.",
          adjustCues: "Sit on gym mat with legs crossed or out comfortably."
        }
      },
      {
        id: "d3-e4",
        name: "Cable Face Pulls with External Rotation",
        targetMuscles: "Rear Deltoids, Rhomboids, Infraspinatus/Teres Minor (Shoulder Armor)",
        muscleTags: {
          primary: ["Rear Deltoids", "Rotator Cuffs"],
          secondary: ["Rhomboids", "Mid-Traps"],
          ankleSafety: ["Soft Knees", "Zero Axial Shear"]
        },
        image: "assets/cable_face_pull.jpg",
        videoQuery: "cable face pull external rotation form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Eye-Level Cable", desc: "Attach rope to pulley at eye height. Grip rope with thumbs pointing back towards your face." },
          step2: { title: "Step 2: Pull to Forehead", desc: "Pull rope directly towards forehead while actively separating hands apart. Drive elbows wide and back." },
          step3: { title: "Step 3: External Rotation Flex", desc: "Rotate wrists up into a 'double-biceps' pose. Squeeze upper back for 2 full seconds. Lower in 2 seconds." }
        },
        phaseData: {
          m1: { sets: 3, reps: "15 reps", weightKg: "15 kg", tempo: "2-1-1-2", restSec: 60 },
          m2: { sets: 4, reps: "12–15 reps", weightKg: "17.5 kg", tempo: "2-1-1-2", restSec: 60 },
          m3: { sets: 4, reps: "12 reps + 2s hold", weightKg: "20 kg", tempo: "2-2-1-0", restSec: 60 }
        },
        cues: {
          setup: "Attach rope to cable pulley at upper-chest or eye level. Grip rope ends with thumbs pointing backward toward yourself.",
          tripodFoot: "Can be performed standing with soft knees or seated on bench.",
          breathingTempo: "Pull rope directly toward your forehead/eyes while separating hands apart. Rotate forearms up into a 'double-biceps' flex. Squeeze upper back hard for 2 full seconds.",
          mistakes: "Do not thrust head forward to meet the rope. Keep neck tall and chin packed."
        },
        busyGymSwap: {
          name: "Prone Incline Bench Dumbbell Rear Delt Flyes",
          videoQuery: "incline rear delt fly proper form shorts",
          reason: "Lie chest down on 30° bench, fly light dumbbells out and up.",
          adjustCues: "Lead with pinky fingers; keep thumbs angled down."
        },
        stiffAnkleSwap: {
          name: "Seated Resistance Band Face Pulls",
          videoQuery: "band face pull proper form shorts",
          reason: "Loop band around a power rack bar at head height while sitting comfortably.",
          adjustCues: "Focus 100% on external rotation hold."
        }
      },
      {
        id: "d3-e5",
        name: "Seated Incline Dumbbell Hammer Curls",
        targetMuscles: "Brachialis, Brachioradialis, Biceps (Compact Arm Density)",
        muscleTags: {
          primary: ["Brachialis & Brachioradialis"],
          secondary: ["Biceps Brachii"],
          ankleSafety: ["Seated 60° Bench", "Feet Resting Flat"]
        },
        image: "assets/incline_hammer_curl.jpg",
        videoQuery: "seated incline hammer curls form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: 60° Incline Setup", desc: "Sit back on 60° bench with head and spine resting against pad. Hold dumbbells with neutral palms-facing-in grip." },
          step2: { title: "Step 2: Strict Elbow Flexion", desc: "Curl dumbbells up keeping thumbs pointing toward the ceiling. Upper arms remain strictly perpendicular to floor." },
          step3: { title: "Step 3: Brachialis Squeeze", desc: "Squeeze the outer arm (brachialis) for 1s at top. Lower slowly under full 3-second tension." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "12 kg each hand (12+12 kg DBs • Warmup: 8–10 kg)", tempo: "3-1-1-1", restSec: 60 },
          m2: { sets: 4, reps: "8–10 reps", weightKg: "14 kg each hand (14+14 kg DBs)", tempo: "3-1-1-1", restSec: 60 },
          m3: { sets: 4, reps: "8 reps", weightKg: "16 kg each hand (16+16 kg DBs)", tempo: "2-0-1-1", restSec: 60 }
        },
        cues: {
          setup: "Sit back on 60° incline bench. Hold dumbbells with neutral palms-facing-each-other grip.",
          tripodFoot: "Feet flat on floor. Head and shoulders resting back against pad.",
          breathingTempo: "Curl dumbbells up smoothly keeping thumbs pointed at ceiling. Squeeze brachialis at peak for 1s. Lower under strict 3s eccentric. Exhale on curl.",
          mistakes: "Do not swing shoulders or swing torso off the bench pad."
        },
        busyGymSwap: {
          name: "Cable Rope Hammer Curls (Seated or Standing)",
          videoQuery: "cable rope hammer curl form shorts",
          reason: "Constant cable tension across entire elbow flexion range.",
          adjustCues: "Keep wrists locked straight; squeeze at top."
        },
        stiffAnkleSwap: {
          name: "Preacher Bench Dumbbell Hammer Curls",
          videoQuery: "preacher hammer curl proper form shorts",
          reason: "Upper arms pinned to preacher pad; zero lower body involvement.",
          adjustCues: "Lower all the way down without hyper-extending elbows."
        }
      }
    ]
  },
  4: {
    dayName: "Thursday",
    title: "Day 4: Lower B — Hamstrings, Pelvic Stability & Ankle Armor",
    subtitle: "Hamstring Curl, 45° Back Extension, Seated Adduction, Single-Leg Bridge + Bike Cardio",
    sessionDuration: "65–75 mins",
    cardioBlock: "15–20 min Stationary Bike at 65–75 RPM (Pedal smoothly using middle of foot / cage, no ankle pounding)",
    exercises: [
      {
        id: "d4-e1",
        name: "Seated / Lying Hamstring Curl",
        targetMuscles: "Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus)",
        muscleTags: {
          primary: ["Hamstrings (Knee Flexors)"],
          secondary: ["Gastrocnemius Head"],
          ankleSafety: ["Pad Above Achilles & Screws", "Zero Axial Shear"]
        },
        image: "assets/seated_hamstring_curl.jpg",
        videoQuery: "seated hamstring leg curl proper form shorts",
        postureSteps: {
          step1: { title: "Step 1: Roller Pad Placement", desc: "Position roller pad just below calf belly, securely ABOVE the Achilles tendon and above the titanium plate." },
          step2: { title: "Step 2: Neutral 90° Ankle", desc: "Keep ankles relaxed at 90°. Never forcefully pull toes toward shins (avoids anterior screw strain)." },
          step3: { title: "Step 3: Heel Pull & 3s Release", desc: "Exhale, curl heels toward seat. Squeeze hamstrings for 1 full second. Return slowly over 3 seconds." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "35 kg", tempo: "3-1-1-1", restSec: 75 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "45 kg", tempo: "3-1-1-1", restSec: 90 },
          m3: { sets: 4, reps: "6–8 reps + 2s peak contraction", weightKg: "50 kg", tempo: "3-2-1-0", restSec: 90 }
        },
        cues: {
          setup: "Seated or prone. Position roller pad just below the gastrocnemius belly (above the Achilles tendon and above the titanium plate).",
          tripodFoot: "Keep ankles relaxed at 90°. Never forcefully pull toes up or point toes down, which can aggravate the screws.",
          breathingTempo: "Exhale, curl heels toward glutes. Squeeze hamstrings tightly for 1 full second. Return under control over 3 full seconds. Inhale.",
          mistakes: "Do not let hips buck off the bench. Grip machine handles firmly to lock pelvis down."
        },
        busyGymSwap: {
          name: "Stability Ball Hamstring Floor Curls",
          videoQuery: "stability ball hamstring curls proper form shorts",
          reason: "Lie on mat, put heels on gym ball, lift hips and curl ball into glutes.",
          adjustCues: "Keep hips elevated; drive through heels."
        },
        stiffAnkleSwap: {
          name: "Single-Leg Hamstring Machine Curl (Light Weight)",
          videoQuery: "single leg hamstring curl form shorts",
          reason: "Allows independent control of left leg with zero bilateral compensation.",
          adjustCues: "Use 15 kg; focus purely on knee flexion burn."
        }
      },
      {
        id: "d4-e2",
        name: "45° Back Extension (Hip Hinge Focus)",
        targetMuscles: "Glutes, Hamstrings, Spinal Erectors (Posterior Chain Power)",
        muscleTags: {
          primary: ["Gluteus Maximus & Hamstrings"],
          secondary: ["Spinal Erectors"],
          ankleSafety: ["Pad Locked Below Hip Crease", "Straight 180° Line"]
        },
        image: "assets/back_extension_45.jpg",
        videoQuery: "45 degree back extension glutes proper form shorts",
        postureSteps: {
          step1: { title: "Step 1: Pad Height Check", desc: "Adjust pad 2 inches BELOW your hip crease so your hips hinge freely without rounding your lower back." },
          step2: { title: "Step 2: Hip Hinge Descent", desc: "Cross arms over chest. Inhale and bend forward from hips over 3 seconds, keeping spine strictly neutral." },
          step3: { title: "Step 3: Glute Drive Lockout", desc: "Drive through hips and squeeze glutes to bring torso to a straight 180° line with legs. DO NOT hyperextend." }
        },
        phaseData: {
          m1: { sets: 3, reps: "12 reps", weightKg: "Bodyweight", tempo: "3-1-1-1", restSec: 75 },
          m2: { sets: 4, reps: "10 reps (Holding DB at chest)", weightKg: "10 kg DB", tempo: "3-1-1-1", restSec: 90 },
          m3: { sets: 4, reps: "8–10 reps", weightKg: "15 kg DB", tempo: "2-0-1-1", restSec: 90 }
        },
        cues: {
          setup: "Adjust hip pad so the top edge is 1–2 inches BELOW your hip crease (allows free hip hinging without rounding back).",
          tripodFoot: "Ankles anchor against the back ankle pad. Position feet straight with equal heel pressure.",
          breathingTempo: "Cross arms over chest. Inhale and lower torso forward from hips (3s). Squeeze glutes and hamstrings to pull yourself back to a straight neutral line. Exhale.",
          mistakes: "DO NOT hyperextend your spine at the top like a scorpion. Stop when body forms a straight 180° line from head to heels."
        },
        busyGymSwap: {
          name: "Dumbbell Romanian Deadlift (Light & Strict Hinge)",
          videoQuery: "dumbbell rdl proper form shorts gym",
          reason: "Classic hip hinge focusing on backward hip shift.",
          adjustCues: "Keep shins vertical, knees soft, hinge back until DB passes kneecaps."
        },
        stiffAnkleSwap: {
          name: "Floor Prone Cobras & Glute Squeezes",
          videoQuery: "prone cobra exercise proper form shorts",
          reason: "Zero foot anchoring required; pure posterior chain activation on mat.",
          adjustCues: "Lie face down, squeeze glutes and raise chest 2 inches."
        }
      },
      {
        id: "d4-e3",
        name: "Seated Hip Adduction Machine",
        targetMuscles: "Adductor Longus/Magnus, Pelvic Alignment (Inner Thigh Stabilizer)",
        muscleTags: {
          primary: ["Adductor Longus & Magnus"],
          secondary: ["Gracilis"],
          ankleSafety: ["Inner Knee Contact", "Zero Ankle Load"]
        },
        image: "assets/seated_hip_adduction.jpg",
        videoQuery: "seated hip adduction machine form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Setup", desc: "Sit tall with pads resting against inner knees. Adjust lever to a comfortable stretch angle." },
          step2: { title: "Step 2: Squeeze Inward", desc: "Exhale, smoothly bring knees together touching in the center. Feet rest lightly on pegs." },
          step3: { title: "Step 3: 2s Hold & Control", desc: "Hold touching point for 1–2 seconds feeling inner thighs engage. Open slowly over 2 seconds." }
        },
        phaseData: {
          m1: { sets: 3, reps: "15 reps", weightKg: "35 kg", tempo: "2-1-2-1", restSec: 60 },
          m2: { sets: 4, reps: "12 reps", weightKg: "45 kg", tempo: "2-1-2-1", restSec: 60 },
          m3: { sets: 4, reps: "10–12 reps (2s hold)", weightKg: "52.5 kg", tempo: "2-2-1-0", restSec: 60 }
        },
        cues: {
          setup: "Sit tall with pads resting on the inside of your knees. Adjust lever to a comfortable stretch angle.",
          tripodFoot: "Keep feet resting lightly on foot supports without pushing through toes.",
          breathingTempo: "Exhale, squeeze knees together smoothly. Hold at touching point for 1–2 seconds. Inhale and control the opening over 2 seconds.",
          mistakes: "Do not let knees slam outward. Maintain controlled tension on the adductors."
        },
        busyGymSwap: {
          name: "Seated Medicine Ball Squeeze on Bench",
          videoQuery: "seated ball squeeze adductors form shorts",
          reason: "Place 4–6 kg medicine ball between knees, squeeze with 5s holds.",
          adjustCues: "Perform 12 reps of 5s isometric squeezes."
        },
        stiffAnkleSwap: {
          name: "Floor Lying Pillow / Foam Roller Adductor Squeeze",
          videoQuery: "foam roller adductor squeeze bridge form shorts",
          reason: "Lie on back with knees bent at 90°, squeeze roller between knees.",
          adjustCues: "Zero ankle loading, pure adductor recruitment."
        }
      },
      {
        id: "d4-e4",
        name: "Single-Leg Glute Bridge (Ankle-Safe)",
        targetMuscles: "Gluteus Maximus, Hamstrings, Pelvic Neutrality",
        muscleTags: {
          primary: ["Unilateral Gluteus Maximus"],
          secondary: ["Hamstrings", "Pelvic Stabilizers"],
          ankleSafety: ["CRITICAL: Vertical Shin", "Big-Toe Contact (80%)"]
        },
        image: "assets/single_leg_glute_bridge.jpg",
        videoQuery: "single leg glute bridge proper form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Setup & Shin Check", desc: "Lie on mat. Bend left knee so shin is vertical at peak hip height. Hug right knee to chest." },
          step2: { title: "Step 2: Big-Toe Mound Drive", desc: "Drive 70% into heel and 30% into 1st Metatarsal big-toe mound. Prevent left ankle from rolling out." },
          step3: { title: "Step 3: Level Pelvis & Squeeze", desc: "Lift hips until torso and left thigh form a straight line. Squeeze glute for 2s. Lower in 2s." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10 reps/side", weightKg: "Bodyweight", tempo: "2-1-2-1", restSec: 60 },
          m2: { sets: 3, reps: "12 reps/side", weightKg: "Bodyweight + 5 kg DB", tempo: "2-1-2-1", restSec: 60 },
          m3: { sets: 4, reps: "10 reps/side (2s hold)", weightKg: "Bodyweight + 8 kg DB", tempo: "2-2-1-0", restSec: 60 }
        },
        cues: {
          setup: "Lie flat on mat. Bend left knee so shin is vertical when hip lifts. Hug right knee into chest with hands.",
          tripodFoot: "CRITICAL: Drive 70% into heel and 30% into big-toe mound. Prevent left ankle from rolling out onto its pinky border.",
          breathingTempo: "Exhale, drive through left foot to raise hips until torso and left thigh align. Squeeze glute for 2s. Lower smoothly (2s).",
          mistakes: "Do not rotate hips. Both hip bones (ASIS) must remain completely level with the ceiling."
        },
        busyGymSwap: {
          name: "Standard Bilateral Glute Bridge with Mini-Band above Knees",
          videoQuery: "banded glute bridge form shorts",
          reason: "Double-leg bridge with band to drive glute engagement safely.",
          adjustCues: "Keep both shins vertical at top."
        },
        stiffAnkleSwap: {
          name: "Elevated-Heel Glute Bridge on Foam Block",
          videoQuery: "elevated heel glute bridge form shorts",
          reason: "Rest heels on a 4-inch soft foam block to reduce dorsiflexion angle to zero.",
          adjustCues: "Drive purely through heels."
        }
      },
      {
        id: "d4-e5",
        name: "Core Superset: Slow Dead Bugs + Cable Pallof Press",
        targetMuscles: "Deep Transverse Abdominis, Internal/External Obliques",
        muscleTags: {
          primary: ["Deep Transverse Abdominis"],
          secondary: ["Obliques"],
          ankleSafety: ["Anti-Rotation Core", "Zero Lower Body Shear"]
        },
        image: "assets/dead_bug_core.jpg",
        videoQuery: "pallof press proper form anti rotation shorts",
        postureSteps: {
          step1: { title: "Step 1: Dead Bug Rib Cage Glue", desc: "Perform 10 deliberate dead bugs on mat with lumbar locked flat to floor." },
          step2: { title: "Step 2: Pallof Stance", desc: "Sit or stand perpendicular to cable. Hold D-handle tight to mid-chest with soft knees." },
          step3: { title: "Step 3: 2s Outward Press", desc: "Exhale sharply, press handle straight forward. Fight the rotation for 2 seconds. Return to chest." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10 dead bugs + 12 pallof presses", weightKg: "Bodyweight / 7.5 kg", tempo: "3s eccentric", restSec: 60 },
          m2: { sets: 3, reps: "12 dead bugs + 12 pallof presses", weightKg: "Bodyweight / 10 kg", tempo: "3s eccentric", restSec: 60 },
          m3: { sets: 3, reps: "12 dead bugs + 15 pallof presses", weightKg: "Bodyweight / 12.5 kg", tempo: "3s eccentric", restSec: 60 }
        },
        cues: {
          setup: "Perform deliberate slow dead bugs on mat, then transition directly to standing/seated cable Pallof press.",
          tripodFoot: "Keep left foot planted firmly on floor during Pallof press, pressing down through the big toe.",
          breathingTempo: "Breathe all air out as you press cable handle straight out. Hold for 2s. Inhale as you return handle to chest.",
          mistakes: "Do not rush through reps. Deep abdominal bracing takes 2–3 seconds per rep to engage."
        },
        busyGymSwap: {
          name: "Floor Hollow Body Tucks + Resistance Band Iso-Hold",
          videoQuery: "hollow body tucks proper form shorts",
          reason: "Can be executed on any open floor space with a resistance band.",
          adjustCues: "Keep lower back anchored to floor."
        },
        stiffAnkleSwap: {
          name: "Seated Bench Pallof Press",
          videoQuery: "seated pallof press proper form shorts",
          reason: "Sit on bench so lower body is 100% unloaded while core fights cable rotation.",
          adjustCues: "Lock hips forward; do not turn pelvis."
        }
      }
    ]
  },
  5: {
    dayName: "Friday",
    title: "Day 5: Upper Athletic Conditioning Supersets",
    subtitle: "Antagonist Supersets (Chest/Back, Shoulders/Row, Delts/Triceps) + Core + Cardio",
    sessionDuration: "70–80 mins",
    cardioBlock: "18–22 min Flat 0% Treadmill Walk at 4.5–4.8 km/h (Rhythmic arm swing, tall spine, conscious big-toe gait)",
    exercises: [
      {
        id: "d5-e1",
        name: "Superset A1: Flat Dumbbell Bench Press",
        targetMuscles: "Pectoralis Major, Anterior Deltoids, Triceps",
        muscleTags: {
          primary: ["Mid & Lower Pectorals"],
          secondary: ["Triceps", "Anterior Deltoid"],
          ankleSafety: ["Flat Feet on Floor", "Zero Rest -> Jump to A2"]
        },
        image: "assets/flat_db_press.jpg",
        videoQuery: "flat dumbbell bench press form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Flat Bench Setup", desc: "Lie flat with dumbbells over chest. Scapulae retracted, feet flat with knees at 90°." },
          step2: { title: "Step 2: 45° Elbow Descent", desc: "Lower dumbbells over 3 seconds until level with outer chest. Keep elbows tucked 45°." },
          step3: { title: "Step 3: Press & Switch to A2", desc: "Exhale and press up crisply. Immediately rack dumbbells and move to Wide Lat Pulldown (A2) with 0s rest." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10 reps", weightKg: "18 kg each hand (18+18 kg DBs • Warmup: 12–14 kg)", tempo: "3-1-1-0", restSec: 0 },
          m2: { sets: 4, reps: "6–8 reps", weightKg: "22 kg each hand (22+22 kg DBs)", tempo: "3-1-1-0", restSec: 0 },
          m3: { sets: 4, reps: "6–8 reps (Crisp)", weightKg: "24 kg each hand (24+24 kg DBs)", tempo: "2-0-X-0", restSec: 0 }
        },
        cues: {
          setup: "Lie flat on bench. Dumbbells over mid-chest. Immediately pair with Wide-Grip Lat Pulldown.",
          tripodFoot: "Both feet flat on floor with equal pressure. Do not push onto left toes.",
          breathingTempo: "Inhale down (3s), touch outer chest, exhale and press to ceiling (1s). Transition to A2 with zero rest.",
          mistakes: "Do not let hips lift off the bench."
        },
        busyGymSwap: {
          name: "Flat Smith Machine Bench Press",
          videoQuery: "smith machine flat bench press form shorts",
          reason: "Fixed barbell path with quick safety catches.",
          adjustCues: "Lower bar to nipple line with controlled cadence."
        },
        stiffAnkleSwap: {
          name: "Seated Machine Flat Chest Press",
          videoQuery: "seated chest press machine form shorts",
          reason: "Zero foot floor drive required.",
          adjustCues: "Sit back flush and press straight out."
        }
      },
      {
        id: "d5-e2",
        name: "Superset A2: Wide-Grip Lat Pulldown",
        targetMuscles: "Latissimus Dorsi, Teres Major, Biceps",
        muscleTags: {
          primary: ["Latissimus Dorsi (Width)"],
          secondary: ["Biceps", "Teres Major"],
          ankleSafety: ["Thigh Pad Locked", "Rest 90s After Pair"]
        },
        image: "assets/wide_lat_pulldown.jpg",
        videoQuery: "wide grip lat pulldown proper form shorts gym",
        postureSteps: {
          step1: { title: "Step 1: Wide Grip", desc: "Take wide overhand grip. Lock thighs firmly under pad. Sit tall with chest puffed." },
          step2: { title: "Step 2: Pull to Clavicle", desc: "Exhale, drive elbows down and back, pulling bar to upper collarbones. Pinch lats hard." },
          step3: { title: "Step 3: 3s Negative & 90s Rest", desc: "Resist bar rising over 3 slow seconds. Rest 90 seconds ONLY after completing A1 + A2." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "45 kg", tempo: "3-1-1-1", restSec: 90 },
          m2: { sets: 4, reps: "8–10 reps", weightKg: "55 kg", tempo: "3-1-1-1", restSec: 90 },
          m3: { sets: 4, reps: "8 reps", weightKg: "62.5 kg", tempo: "2-0-1-1", restSec: 90 }
        },
        cues: {
          setup: "Take wide overhand grip on lat pulldown bar. Lock thighs under pad. Rest 90s only AFTER completing A1 + A2.",
          tripodFoot: "Feet flat on floor below knees. Spine tall with proud chest.",
          breathingTempo: "Pull bar smoothly to upper chest. Squeeze lats hard. Return over 3s. Rest 90s after this set.",
          mistakes: "Do not pull bar behind neck (damages shoulder joint)."
        },
        busyGymSwap: {
          name: "Neutral-Grip Lat Pulldown or Seated High Cable Pulley",
          videoQuery: "neutral grip lat pulldown form shorts",
          reason: "Direct lat targeting with whichever grip handle is free.",
          adjustCues: "Keep chest tall throughout."
        },
        stiffAnkleSwap: {
          name: "Chest-Supported Machine High Row",
          videoQuery: "machine high row chest supported form shorts",
          reason: "Zero foot strain; lat engagement against chest pad.",
          adjustCues: "Pull high to low."
        }
      },
      {
        id: "d5-e3",
        name: "Superset B1: Seated Machine Shoulder Press",
        targetMuscles: "Anterior Deltoids, Lateral Deltoids, Triceps",
        muscleTags: {
          primary: ["Anterior & Medial Deltoids"],
          secondary: ["Triceps"],
          ankleSafety: ["85° Backrest", "Move Direct to B2"]
        },
        image: "assets/seated_db_shoulder_press.jpg",
        videoQuery: "seated machine shoulder press proper form shorts",
        postureSteps: {
          step1: { title: "Step 1: Machine Setup", desc: "Sit deep with backrest at 85°. Handles at chin height with elbows under wrists." },
          step2: { title: "Step 2: Crisp Overhead Drive", desc: "Press handles straight up overhead without locking elbows violently at top." },
          step3: { title: "Step 3: Transition to B2", desc: "Lower in 3 seconds. Unrack and move directly to Seated Cable Row (B2) with 0s rest." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10 reps", weightKg: "35 kg", tempo: "3-1-1-0", restSec: 0 },
          m2: { sets: 4, reps: "8 reps", weightKg: "45 kg", tempo: "3-1-1-0", restSec: 0 },
          m3: { sets: 4, reps: "6–8 reps", weightKg: "50 kg", tempo: "2-0-1-0", restSec: 0 }
        },
        cues: {
          setup: "Sit back in shoulder press machine with back pad at 85°. Immediately pair with Seated Cable Row (B2).",
          tripodFoot: "Keep feet flat on base with zero ankle roll.",
          breathingTempo: "Press overhead crisply. Lower in 3 seconds. Transition immediately to B2.",
          mistakes: "Do not lock elbows violently at the top."
        },
        busyGymSwap: {
          name: "Seated Dumbbell Shoulder Press (Neutral Grip)",
          videoQuery: "seated dumbbell shoulder press form shorts",
          reason: "Readily available free dumbbell alternative.",
          adjustCues: "Sit on upright bench with dumbbells at ear height."
        },
        stiffAnkleSwap: {
          name: "Seated Landmine Press (Single Arm)",
          videoQuery: "half kneeling landmine press proper form shorts",
          reason: "Gentle natural pressing arc with zero lower body involvement.",
          adjustCues: "Press barbell diagonally away."
        }
      },
      {
        id: "d5-e4",
        name: "Superset B2: Seated Cable Row (Close-Grip V-Bar)",
        targetMuscles: "Mid-Traps, Rhomboids, Latissimus Dorsi",
        muscleTags: {
          primary: ["Rhomboids & Mid-Trapezius"],
          secondary: ["Latissimus Dorsi", "Biceps"],
          ankleSafety: ["Feet Light on Footrests", "Rest 90s After Pair"]
        },
        image: "assets/seated_cable_row.jpg",
        videoQuery: "seated cable row close grip v bar form shorts",
        postureSteps: {
          step1: { title: "Step 1: Setup", desc: "Sit with soft knees, feet resting lightly on foot rests. Chest upright, shoulders down." },
          step2: { title: "Step 2: Pull to Navel", desc: "Exhale, drive elbows back, pulling V-bar into your belly button. Pinch shoulder blades." },
          step3: { title: "Step 3: 3s Return & 90s Rest", desc: "Extend arms forward over 3s without rounding lower back. Rest 90 seconds after B1 + B2." }
        },
        phaseData: {
          m1: { sets: 3, reps: "10–12 reps", weightKg: "45 kg", tempo: "3-1-1-1", restSec: 90 },
          m2: { sets: 4, reps: "8–10 reps", weightKg: "55 kg", tempo: "3-1-1-1", restSec: 90 },
          m3: { sets: 4, reps: "8 reps", weightKg: "62.5 kg", tempo: "2-0-1-1", restSec: 90 }
        },
        cues: {
          setup: "Sit on cable row bench with V-bar attachment. Knees slightly bent, chest tall.",
          tripodFoot: "Place feet lightly on foot rests without pushing through toes.",
          breathingTempo: "Pull V-bar to navel, squeezing shoulder blades together for 1s. Inhale and extend arms forward over 3s. Rest 90s after this set.",
          mistakes: "Do not round lower back forward as weight stretches arms."
        },
        busyGymSwap: {
          name: "Chest-Supported T-Bar Row",
          videoQuery: "chest supported t bar row form shorts",
          reason: "Presents identical scapular retraction line of pull.",
          adjustCues: "Keep chest firmly against pad."
        },
        stiffAnkleSwap: {
          name: "Single-Arm Dumbbell Row on Bench",
          videoQuery: "single arm dumbbell row proper form shorts",
          reason: "Support right knee on bench so left foot rests without load.",
          adjustCues: "Pull dumbbell straight up to hip."
        }
      },
      {
        id: "d5-e5",
        name: "Superset C1: Cable Lateral Raise + C2: Overhead Cable Triceps",
        targetMuscles: "Lateral Deltoids + Triceps Long Head (Compact Silhouette Finish)",
        muscleTags: {
          primary: ["Lateral Deltoid", "Triceps Long Head"],
          secondary: ["Brachialis"],
          ankleSafety: ["Cable Tension", "Athletic Soft Knees"]
        },
        image: "assets/cable_lateral_raise.jpg",
        videoQuery: "overhead cable tricep extension rope form shorts",
        postureSteps: {
          step1: { title: "Step 1: Lateral Raise Burn", desc: "Perform 12 reps of Cable Lateral Raises leading with elbows to shoulder height." },
          step2: { title: "Step 2: Turn to Overhead Extension", desc: "Turn around immediately, step forward, pull rope overhead and flare triceps to full extension." },
          step3: { title: "Step 3: 75s Rest", desc: "Feel deep stretch along long head of triceps. Rest 75s after both exercises." }
        },
        phaseData: {
          m1: { sets: 3, reps: "12 lat raises + 12 triceps extensions", weightKg: "5 kg / 15 kg", tempo: "2-1-1-1", restSec: 75 },
          m2: { sets: 3, reps: "12 lat raises + 10 triceps extensions", weightKg: "7.5 kg / 17.5 kg", tempo: "2-1-1-1", restSec: 75 },
          m3: { sets: 3, reps: "10 lat raises + 8 triceps extensions", weightKg: "9 kg / 20 kg", tempo: "2-0-1-1", restSec: 75 }
        },
        cues: {
          setup: "Perform Cable Lateral Raise, then immediately spin around to overhead cable rope triceps extension.",
          tripodFoot: "Keep feet stable and soft; focus on upper-body muscular pump.",
          breathingTempo: "Controlled 2s eccentric on both movements with 1s peak contractions. Rest 75s after both.",
          mistakes: "Do not hyperextend spine during overhead triceps extension."
        },
        busyGymSwap: {
          name: "Seated Dumbbell Lateral Raise + Seated DB Overhead Extension",
          videoQuery: "seated dumbbell overhead tricep extension form shorts",
          reason: "Can be done on a single bench with one pair of dumbbells.",
          adjustCues: "Sit deep and keep elbows tucked."
        },
        stiffAnkleSwap: {
          name: "Seated Lateral Raise Machine + Cable Rope Pushdown",
          videoQuery: "tricep rope pushdown form shorts",
          reason: "Fully seated and supported arm finishers.",
          adjustCues: "Keep wrists straight."
        }
      },
      {
        id: "d5-e6",
        name: "Core: Seated Bench Knee Tucks + Side Plank Holds",
        targetMuscles: "Rectus Abdominis, Obliques, Serratus Anterior",
        muscleTags: {
          primary: ["Rectus Abdominis", "Obliques"],
          secondary: ["Hip Flexors"],
          ankleSafety: ["Hovering Feet", "Zero Foot Impact"]
        },
        image: "assets/bench_knee_tucks.jpg",
        videoQuery: "seated bench knee tucks core form shorts",
        postureSteps: {
          step1: { title: "Step 1: Bench Edge Grip", desc: "Sit on bench edge, hands gripping sides behind hips. Lean torso back 30°." },
          step2: { title: "Step 2: Knee Tuck Crunch", desc: "Hover feet, exhale sharply and pull knees to chest. Squeeze abs tight for 1 second." },
          step3: { title: "Step 3: Side Plank Finish", desc: "Drop to mat on forearm side plank. Hold straight hip line for 25–35 seconds per side." }
        },
        phaseData: {
          m1: { sets: 3, reps: "15 knee tucks + 25s side plank/side", weightKg: "Bodyweight", tempo: "2s pause", restSec: 60 },
          m2: { sets: 3, reps: "15 knee tucks + 30s side plank/side", weightKg: "Bodyweight", tempo: "2s pause", restSec: 60 },
          m3: { sets: 3, reps: "20 knee tucks + 35s side plank/side", weightKg: "Bodyweight", tempo: "2s pause", restSec: 60 }
        },
        cues: {
          setup: "Sit on end of flat bench, grip edges with hands. Lean back 30°, extend legs forward then pull knees to chest.",
          tripodFoot: "Feet hover in air during tucks—zero floor impact or ankle dorsiflexion.",
          breathingTempo: "Exhale sharply as knees touch chest. Squeeze abs tight. Inhale as legs extend.",
          mistakes: "Do not swing legs with momentum. Use strict abdominal contraction."
        },
        busyGymSwap: {
          name: "Floor Reverse Crunches + Mat Side Plank",
          videoQuery: "reverse crunch form shorts",
          reason: "Floor alternatives requiring only a gym mat.",
          adjustCues: "Lift pelvis towards ribs on reverse crunches."
        },
        stiffAnkleSwap: {
          name: "Seated Bench Isometric Abdominal Vacuum & Brace",
          videoQuery: "stomach vacuum exercise proper form shorts",
          reason: "Sit tall, exhale all air, draw belly button in for 15s hold.",
          adjustCues: "Perform 4 rounds of 15s vacuum holds."
        }
      }
    ]
  },
  6: {
    dayName: "Saturday",
    title: "Day 6: Posture Reset, Deep Core & Ankle Armor",
    subtitle: "Peroneal Band Holds, Cable Y-Raises, Seated March & 25 min Zone-2 Conditioning",
    sessionDuration: "60–70 mins",
    cardioBlock: "25 min Zone-2 Zero-Impact Conditioning (Stationary Bike at 70 RPM or Flat 0% Treadmill Walk with conscious 1st MTP big-toe roll cue)",
    exercises: [
      {
        id: "d6-e1",
        name: "Peroneal Resistance Band Eversion Holds & Eccentric Reset",
        targetMuscles: "Peroneus Longus & Brevis (Left Ankle Anti-Rolling Muscle)",
        muscleTags: {
          primary: ["Peroneus Longus & Brevis"],
          secondary: ["Anterior Tibialis Stabilizer"],
          ankleSafety: ["CRITICAL REHAB", "Stops Outer Border Roll"]
        },
        image: "assets/ankle_eversion.jpg",
        videoQuery: "band ankle eversion peroneus longus physical therapy shorts",
        postureSteps: {
          step1: { title: "Step 1: Band Anchor", desc: "Sit with legs out. Loop mini-band around left forefoot, anchored medially. Pin left heel to floor." },
          step2: { title: "Step 2: Outward Eversion", desc: "Rotate left forefoot out and up against band tension. Squeeze outer calf/shin tightly." },
          step3: { title: "Step 3: 3s Peak Hold & 4s Eccentric", desc: "Hold peak contraction for 3 seconds. Slowly resist the band pulling inward over 4 seconds." }
        },
        phaseData: {
          m1: { sets: 3, reps: "15 reps (2s hold) + 3s eccentric", weightKg: "Red Mini-Band", tempo: "3-2-1-0", restSec: 60 },
          m2: { sets: 3, reps: "15 reps (3s hold) + 4s eccentric", weightKg: "Black Mini-Band", tempo: "4-3-1-0", restSec: 60 },
          m3: { sets: 3, reps: "18 reps (3s hold)", weightKg: "Heavy Mini-Band", tempo: "3-3-1-0", restSec: 60 }
        },
        cues: {
          setup: "Sit with legs extended. Loop resistance band around forefoot, anchored medially.",
          tripodFoot: "Keep left heel pinned as a pivot point.",
          breathingTempo: "Rotate forefoot outward and upward. Squeeze the outer shin hard for 2–3 seconds. Slowly resist the inward pull over 3–4 seconds.",
          mistakes: "Do not rotate your entire leg or hip. Only the ankle joint moves."
        },
        busyGymSwap: {
          name: "Isometric Foot Press Against Solid Rack Post",
          videoQuery: "isometric ankle eversion wall exercise shorts",
          reason: "Place outside border of left shoe against solid post, push outward for 10s holds.",
          adjustCues: "Hold for 10s x 5 reps."
        },
        stiffAnkleSwap: {
          name: "Unweighted Active Ankle Eversion with 5s Squeeze",
          videoQuery: "active ankle eversion exercises shorts",
          reason: "Perform unweighted deliberate eversion contractions.",
          adjustCues: "Focus purely on mind-muscle connection with the peroneals."
        }
      },
      {
        id: "d6-e2",
        name: "Cable Y-Raises / Prone Cobras (Thoracic Desk Posture)",
        targetMuscles: "Lower Trapezius, Rhomboids, Thoracic Extensors",
        muscleTags: {
          primary: ["Lower Trapezius"],
          secondary: ["Rhomboids", "Thoracic Extensors"],
          ankleSafety: ["Counters Desk Slouch", "Seated Alignment"]
        },
        image: "assets/cable_y_raise.jpg",
        videoQuery: "cable y raise lower traps proper form shorts",
        postureSteps: {
          step1: { title: "Step 1: Cross Cable Grip", desc: "Cross cables at hip height (left hand holds right pulley, right holds left). Sit or stand tall." },
          step2: { title: "Step 2: Diagonal 'Y' Path", desc: "Raise arms diagonally upward into a 'Y' shape leading with thumbs. Keep shoulders pressed down." },
          step3: { title: "Step 3: 2s Lower Trap Squeeze", desc: "Squeeze mid/lower traps for 2 full seconds. Feel mid-back fire to reverse desk rounding." }
        },
        phaseData: {
          m1: { sets: 3, reps: "12 reps (2s hold)", weightKg: "2.5 kg cable or DB", tempo: "2-2-1-0", restSec: 60 },
          m2: { sets: 4, reps: "12 reps (2s hold)", weightKg: "3.75 kg cable or DB", tempo: "2-2-1-0", restSec: 60 },
          m3: { sets: 4, reps: "10–12 reps (3s hold)", weightKg: "5 kg cable or DB", tempo: "2-3-1-0", restSec: 60 }
        },
        cues: {
          setup: "Set dual cables to hip height, cross cables so left hand holds right pulley and vice versa, or lie prone on mat.",
          tripodFoot: "Can be performed seated on bench to eliminate foot loading.",
          breathingTempo: "Raise arms diagonally upward into a 'Y' shape with thumbs leading. Squeeze lower traps tightly for 2–3s. Lower in 2s.",
          mistakes: "Do not shrug with upper traps. Keep shoulders down away from ears."
        },
        busyGymSwap: {
          name: "Prone Incline Bench Dumbbell Y-Raises (Light 2–4 kg)",
          videoQuery: "incline dumbbell y raise proper form shorts",
          reason: "Lie chest down on 30° bench, raise light dumbbells in a Y shape.",
          adjustCues: "Lead with thumbs up to the ceiling."
        },
        stiffAnkleSwap: {
          name: "Floor Prone Cobras with Thumbs Up",
          videoQuery: "prone cobra exercise form shorts",
          reason: "Lie face down, squeeze glutes, lift chest and rotate thumbs up.",
          adjustCues: "Hold for 5 seconds per rep."
        }
      },
      {
        id: "d6-e3",
        name: "Seated Pallof Iso-Hold & Hollow Body Hold",
        targetMuscles: "Transverse Abdominis, Internal/External Obliques",
        muscleTags: {
          primary: ["Deep Transverse Abdominis"],
          secondary: ["Obliques"],
          ankleSafety: ["Seated Bench", "Zero Joint Axial Load"]
        },
        image: "assets/dead_bug_core.jpg",
        videoQuery: "seated pallof press iso hold form shorts",
        postureSteps: {
          step1: { title: "Step 1: Perpendicular Seated Bench", desc: "Sit sideways to cable. Hold D-handle tight to sternum with tall posture." },
          step2: { title: "Step 2: Arm Lockout & Iso-Hold", desc: "Press arms straight out in front. Lock elbows and hold statically for 25–35 seconds." },
          step3: { title: "Step 3: Diaphragmatic Breath", desc: "Take short controlled breaths while keeping abdominal wall braced like armor." }
        },
        phaseData: {
          m1: { sets: 3, reps: "25s Pallof hold/side + 25s Hollow body", weightKg: "7.5 kg cable", tempo: "Isometric hold", restSec: 60 },
          m2: { sets: 3, reps: "30s Pallof hold/side + 30s Hollow body", weightKg: "10 kg cable", tempo: "Isometric hold", restSec: 60 },
          m3: { sets: 4, reps: "35s Pallof hold/side + 35s Hollow body", weightKg: "12.5 kg cable", tempo: "Isometric hold", restSec: 60 }
        },
        cues: {
          setup: "Sit tall on bench perpendicular to cable machine. Press handle out in front of chest and lock arms straight.",
          tripodFoot: "Seated posture ensures zero ankle shear.",
          breathingTempo: "Hold isometric tension. Take short, controlled diaphragmatic breaths while keeping abdominal wall braced tight.",
          mistakes: "Do not let cable pull your hands back toward the pulley."
        },
        busyGymSwap: {
          name: "Standing Banded Pallof Iso-Hold",
          videoQuery: "banded pallof press hold form shorts",
          reason: "Anchor mini-band to rack, step out and hold.",
          adjustCues: "Keep athletic stance with soft knees."
        },
        stiffAnkleSwap: {
          name: "Floor Dead Bug 30s Isometric Holds",
          videoQuery: "dead bug isometric hold form shorts",
          reason: "Lie on mat, extend opposite limbs and hold statically for 30s.",
          adjustCues: "Keep lower back pressed flat into mat."
        }
      },
      {
        id: "d6-e4",
        name: "Supported Seated Dumbbell March / Grounded Tripod Drill",
        targetMuscles: "Iliopsoas, Transverse Abdominis, Left Foot Medial Arch Stabilizers",
        muscleTags: {
          primary: ["Iliopsoas & Deep Core"],
          secondary: ["Foot Medial Arch Stabilizers"],
          ankleSafety: ["Tripod Re-Education", "1st MTP Big-Toe Grounding"]
        },
        image: "assets/ankle_eversion.jpg",
        videoQuery: "seated march exercise core hip flexor shorts",
        postureSteps: {
          step1: { title: "Step 1: Upright Seated Stance", desc: "Sit on bench edge with knees at 90°. Hold light dumbbell on left knee for progressive overload." },
          step2: { title: "Step 2: 1st MTP Grounding", desc: "Consciously press the ball of your left big toe firmly into floor to activate the inner arch." },
          step3: { title: "Step 3: 2s Controlled Knee Lift", desc: "Lift knee 3 inches up while keeping spine tall. Hold for 2s. Lower foot down softly." }
        },
        phaseData: {
          m1: { sets: 3, reps: "12 marches/leg", weightKg: "Bodyweight", tempo: "2s hold at peak", restSec: 60 },
          m2: { sets: 3, reps: "15 marches/leg (Holding DB on knee)", weightKg: "6 kg DB", tempo: "2s hold at peak", restSec: 60 },
          m3: { sets: 3, reps: "15 marches/leg (Holding DB on knee)", weightKg: "8 kg DB", tempo: "3s hold at peak", restSec: 60 }
        },
        cues: {
          setup: "Sit upright on edge of bench with both feet flat on floor. Hold dumbbell resting on knee if progressing.",
          tripodFoot: "When left foot is on floor, consciously press through the 1st Metatarsal (base of big toe). Feel the medial arch activate.",
          breathingTempo: "Slowly lift left knee 3–4 inches off floor. Hold for 2 seconds. Place foot down gently under control.",
          mistakes: "Do not lean torso backward to lift the leg. Torso stays rigidly upright."
        },
        busyGymSwap: {
          name: "Seated Resistance Band Knee Lifts",
          videoQuery: "seated band knee drive hip flexor shorts",
          reason: "Place mini-band around forefeet while seated, lift one knee against band.",
          adjustCues: "Lift knee smoothly against resistance."
        },
        stiffAnkleSwap: {
          name: "Seated Static Big-Toe Floor Press Isometric",
          videoQuery: "short foot exercise foot arch activation shorts",
          reason: "Keep foot flat, press big toe firmly into floor for 10s holds without lifting leg.",
          adjustCues: "Perform 5 x 10s presses per foot."
        }
      }
    ]
  },
  7: {
    dayName: "Sunday",
    title: "Day 7: Full Recovery & Orthopedic Reset",
    subtitle: "Complete Rest, Swelling Check, Hydration & Weekly Measurements",
    sessionDuration: "0 mins (Rest Day)",
    cardioBlock: "Zero gym cardio. Optional gentle 15–20 min leisurely flat walk with comfortable cushioned supportive footwear if ankle is 0/10 pain.",
    exercises: []
  }
};

// High Pain Alternative Workout (Triggered automatically if Pain >= 4/10)
const HIGH_PAIN_SWAP_WORKOUT = {
  title: "⚠️ Orthopedic Safety Swap Activated (Ankle Pain ≥ 4/10)",
  notice: "All lower body impact, standing axial loads, and treadmill walking have been disabled for today to protect your ORIF hardware and distal syndesmosis.",
  cardioBlock: "15–20 min Recumbent Stationary Bike at ultra-light resistance (Level 1–2, 60–65 RPM) OR complete rest if ankle is actively throbbing.",
  exercises: [
    {
      id: "pain-swap-1",
      name: "Seated Chest-Supported Isometric Scapular Retraction",
      targetMuscles: "Rhomboids, Lower Trapezius",
      image: "assets/chest_supported_row.jpg",
      videoQuery: "scapular retraction exercises seated form shorts",
      sets: 3,
      reps: "10 reps with 5s peak squeeze",
      postureSteps: {
        step1: { title: "Step 1: Setup", desc: "Lie face down on 30° incline bench with chest supported. Lower limbs relaxed on floor with zero pressure." },
        step2: { title: "Step 2: Retract", desc: "Pinch shoulder blades together firmly without shrugging upward toward ears." },
        step3: { title: "Step 3: 5s Hold", desc: "Hold peak squeeze for 5 full seconds. Breathe smoothly. Return over 2 seconds." }
      },
      cues: "Sit on incline bench face down. Squeeze shoulder blades together for 5 strict seconds without straining neck."
    },
    {
      id: "pain-swap-2",
      name: "Seated Cable Rope Face Pulls (High Rep)",
      targetMuscles: "Rear Deltoids, Rotator Cuffs",
      image: "assets/cable_face_pull.jpg",
      videoQuery: "seated cable face pull proper form shorts",
      sets: 3,
      reps: "15–20 light controlled reps",
      postureSteps: {
        step1: { title: "Step 1: Setup", desc: "Sit on flat bench facing eye-level cable pulley with double rope attachment." },
        step2: { title: "Step 2: Pull & Flare", desc: "Pull rope to forehead while rotating hands out into double-biceps flex." },
        step3: { title: "Step 3: 2s Squeeze", desc: "Hold 2 seconds with zero foot or ankle tension. Return smoothly." }
      },
      cues: "Sit on flat bench facing cable machine. Smoothly pull rope to eye level and rotate hands out. Zero foot tension."
    },
    {
      id: "pain-swap-3",
      name: "Seated Bench Reverse Crunches / Tucks",
      targetMuscles: "Rectus Abdominis, Hip Flexors",
      image: "assets/bench_knee_tucks.jpg",
      videoQuery: "seated bench reverse crunch form shorts",
      sets: 3,
      reps: "12–15 slow reps",
      postureSteps: {
        step1: { title: "Step 1: Setup", desc: "Sit on bench with hands holding sides behind hips. Lean torso back 30°." },
        step2: { title: "Step 2: Hover & Tuck", desc: "Hover feet in air (zero floor contact). Pull knees to chest exhaling all air." },
        step3: { title: "Step 3: Squeeze", desc: "Squeeze abdominal wall tight for 1s. Extend legs forward under control." }
      },
      cues: "Sit on bench with feet hovering. Bring knees toward chest, exhaling completely."
    },
    {
      id: "pain-swap-4",
      name: "Seated Bench Pallof Anti-Rotation Press",
      targetMuscles: "Obliques, Transverse Abdominis",
      image: "assets/dead_bug_core.jpg",
      videoQuery: "seated pallof press form shorts",
      sets: 3,
      reps: "12 reps/side with 2s hold",
      postureSteps: {
        step1: { title: "Step 1: Setup", desc: "Sit perpendicular to cable pulley holding D-handle at chest level." },
        step2: { title: "Step 2: Press Out", desc: "Press handle straight out in front. Keep torso rigidly still against the pull." },
        step3: { title: "Step 3: 2s Hold", desc: "Hold for 2 seconds resisting the rotational twist. Return to chest." }
      },
      cues: "Sit perpendicular to cable. Press handle straight out and hold resisting the rotation."
    }
  ]
};

// Indian Diet Plan (1,950 kcal / 145g Protein) - Strictly No Chicken, No Eggs
const DIET_MEALS = [
  {
    id: "meal-1",
    time: "6:30 AM",
    title: "Pre-Workout Hydration & Primer",
    calories: 140,
    proteinGrams: 5,
    carbsGrams: 20,
    fatGrams: 4,
    items: [
      { name: "Warm water (500 ml) + 1 pinch pink salt + 1/2 lemon juice", qty: "1 big glass", protein: "0g" },
      { name: "Black coffee (hot or iced, unsweetened)", qty: "1 mug", protein: "0g" },
      { name: "Soaked almonds (5 pcs) + Soaked walnuts (2 halves)", qty: "20g", protein: "3g" },
      { name: "Small ripe banana OR 2 medjool dates (quick glycogen)", qty: "1 small", protein: "1.5g" }
    ],
    notes: "Provides immediate cellular hydration and caffeine peak without bloating your stomach before lifting."
  },
  {
    id: "meal-2",
    time: "9:00 AM",
    title: "Post-Workout Breakfast (High-Protein Paneer Power)",
    calories: 520,
    proteinGrams: 44,
    carbsGrams: 46,
    fatGrams: 16,
    items: [
      { name: "Low-Fat Paneer Bhurji (grated/crumbled with onion, tomato, green chilies, turmeric & 1 tsp mustard oil)", qty: "150g raw paneer", protein: "27g" },
      { name: "Multigrain / Whole Wheat Rotis (dry, no added ghee on top)", qty: "2 medium rotis", protein: "6g" },
      { name: "Fresh Homemade Curd (Dahi) or Greek Yogurt", qty: "150g (1 bowl)", protein: "9g" },
      { name: "Cucumber & tomato slices with lemon juice", qty: "1 bowl", protein: "2g" }
    ],
    notes: "Low-fat paneer provides sustained slow-release casein and fast leucine to trigger muscle protein synthesis."
  },
  {
    id: "meal-3",
    time: "1:30 PM",
    title: "Desk Shift Lunch (Soya Chunks & Dal Complex)",
    calories: 510,
    proteinGrams: 42,
    carbsGrams: 62,
    fatGrams: 9,
    items: [
      { name: "Soya Chunks Curry (Boiled, squeezed, simmered in spiced onion-tomato-ginger gravy)", qty: "50g raw dry soya", protein: "26g" },
      { name: "Yellow Moong Dal / Toor Dal (thick homestyle preparation)", qty: "1 medium bowl (150g)", protein: "9g" },
      { name: "Steamed Basmati Rice OR 1 Phulka + 1/2 katori rice", qty: "150g cooked rice", protein: "4g" },
      { name: "Mixed Green Salad (Cabbage, carrots, cucumber, radish)", qty: "1 big plate", protein: "3g" }
    ],
    notes: "Soya chunks pack 52g protein per 100g dry weight—the ultimate vegetarian muscle-building superfood."
  },
  {
    id: "meal-4",
    time: "5:00 PM",
    title: "Desk Shift Evening Snack (Anti-Cravings Anchor)",
    calories: 270,
    proteinGrams: 18,
    carbsGrams: 28,
    fatGrams: 9,
    items: [
      { name: "Steamed Sprouted Moong Chaat (with diced onions, chaat masala, lemon)", qty: "100g sprouted", protein: "7g" },
      { name: "Dry Roasted Chana (Bengal Gram) with skin", qty: "30g (handful)", protein: "6g" },
      { name: "Plain Skimmed Milk OR Greek Yogurt cup", qty: "150 ml", protein: "5g" },
      { name: "Unsweetened Green Tea or Black Tea", qty: "1 cup", protein: "0g" }
    ],
    notes: "Stops the 5:00 PM office junk food temptation; provides high fiber for digestive regularity."
  },
  {
    id: "meal-5",
    time: "8:30 PM",
    title: "Post-Shift Dinner (Fish / High-Protein Tofu & Greens)",
    calories: 510,
    proteinGrams: 41,
    carbsGrams: 42,
    fatGrams: 14,
    items: [
      { name: "Grilled / Pan-Seared Pomfret/Rohu/Surmai (OR 180g High-Protein Tofu/Paneer on non-fish days)", qty: "180g fillet", protein: "32g" },
      { name: "Stir-fried vegetables (Broccoli, bell peppers, beans, garlic sautéed in 1/2 tsp olive oil)", qty: "150g", protein: "4g" },
      { name: "Small Whole Wheat Phulka OR 1/2 cup cooked quinoa", qty: "1 small", protein: "3g" },
      { name: "Fresh Curd / Chaas with roasted cumin powder", qty: "1 glass (150ml)", protein: "4g" }
    ],
    notes: "Fish delivers anti-inflammatory Omega-3 fatty acids (EPA/DHA) that directly accelerate left ankle joint recovery."
  }
];

const RED_FLAG_SAFETY = {
  rule24Hr: "The 24-Hour Recovery Rule: After every workout, your left ankle pain must return to baseline (≤ 2–3/10) within 24 hours with ZERO next-morning heat or visible edema swelling. If pain lingers into the next day, you overreached.",
  hardwareContext: "Left Ankle ORIF (March 2026): Your medial plate and fibular rod are load-bearing, but the TWO DISTAL SYNDESMOTIC SCREWS bridge the tibia and fibula. The syndesmosis requires rotational stability. Axial compressive jumps and extreme dorsiflexion create shearing forces across these screws.",
  stopImmediatelyCriteria: [
    "Sudden sharp, localized 'pinching' or 'stabbing' sensation directly over the medial plate or fibular screw heads.",
    "Observable swelling, puffiness, or skin redness over the lateral or medial malleolus post-exercise.",
    "Involuntary limp or inability to bear weight symmetrically across both legs.",
    "A sensation of clicking, catching, or mechanical instability inside the talocrural mortise.",
    "Foot involuntarily rolling onto the outside edge (inversion) during pressing or walking."
  ],
  swellingProtocol: "If ankle swells or hits ≥4/10: (1) Sit & elevate left foot above heart level for 20 mins. (2) Apply ice pack wrapped in cloth for 15 mins. (3) Do 20 gentle seated ankle pumps to pump lymphatic fluid. (4) Log pain score and take next day as Active Recovery."
};
