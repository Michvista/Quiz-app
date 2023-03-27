// creating an array and passing the number, questions, options, and answers
let questions = [
	{
		numb: 1,
		question: "A force which Balance out the sum of other forces is ?",
		answer: "Equilibrant",
		options: [
			"Resultant",
			"Parallel force",
			"Equilibrant",
			"Component force"
		]
	},
	{
		numb: 2,
		question: "What displacement must be added to a 50cm displacement in the +x direction to give a resultant displacement of 85cm at 25degree",
		answer: "45cm",
		options: [
			"12cm",
			"18.8cm",
			"138.8cm",
			"45cm"
		]
	},
	{
		numb: 3,
		question: "With an Airspeed of 100km/hr a pilot Flies a course bearing of 120degree if a steady wind of 50km/hr is blowing from a bearing of 080degree Determine the ground speed",
		answer: "69.6km/hr",
		options: [
			"69.6km/hr",
			"32.0km/hr",
			"19.0km/hr",
			"120.78km/hr"
		]
	},
	{
		numb: 4,
		question: "which of the following type of motion is produced by a couple",
		answer: "Rotational",
		options: [
			"Oscillatory",
			"Rotational",
			"Random",
			"Translational"
		]
	},
	{
		numb: 5,
		question: "A force 10N and 50N act at an angle 60degree to each other. Find the magnitude of the Equilibrant",
		answer: "13.2units",
		options: [
			"10.0units",
			"26.4units",
			"15.0units",
			"13.2units"
		]
	},
	// you can uncomment the below codes and make duplicate as more as you want to add question
	// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
	{
		numb: 6,
		question: "The point in which the whole weight of a body concentrate is known as?",
		answer: "Center of gravity",
		options: [
			"middle point",
			"Maximum point",
			"Centre of gravity",
			"Equilibrium point"
		]
	},
	{
		numb: 7,
		question: "A body moving on a smooth inclined plane will experience?",
		answer: "Zero Friction",
		options: [
			"Maximum friction",
			"Retardation",
			"Zero Friction",
			"minimum acceleration"
		]
	},
	{
		numb: 8,
		question: "A 5.0 long uniform plank is supported at the centre of gravity . A 3.0kg boy sits at one end of the plank. A second boy sit 0.3m from the other end calculate the boy weight if the plank is in equilibrium horizontally",
		answer: "340.9N",
		options: [
			"6932N",
			"340.9N",
			"25.17N",
			"39.16N"
		]
	},
	{
		numb: 9,
		question: "The sum of all forces under Equilibrium is?",
		answer: "0",
		options: [
			"Equal",
			"Maximum",
			"0",
			"Minimum"
		]
	},
	{
		numb: 10,
		question: "A boat heads 20degree west of North across a canal at a speed of 12m/s what is the resultsnt velocity of the boat if water in the cannal flow due east 12m/s",
		answer: "13.76m/s",
		options: [
			"6.66m/s",
			"27.7m/s",
			"13.76m/s",
			"34.4m/s"
		]
	},
	{
		numb: 11,
		question: "A long jumper had take off velocity of 9.5m/s What is the maximum horizontal distance?",
		answer: "9.21m",
		options: [
			"19.45m",
			"12.66m",
			"9.21m",
			"19.45m"
		]
	},
	{
		numb: 12,
		question: "A body thrown with v=5i+8j in m/s find the time taken to reach maximum height",
		answer: "0.825",
		options: [
			"0.825s",
			"44.5s",
			"0.34s",
			"23.3s"
		]
	},
	{
		numb: 13,
		question: "Express the speed of a car travelling at 80km/hr in mm/s",
		answer: "2.22×10^4mm/s",
		options: [
			"2.22x10^3mm/s",
			"22.2×10^5mm/s",
			"2.22×10^-3mm/s",
			"2.22×10^4mm/s"
		]
	},
	{
		numb: 14,
		question: "vector a=-i-4j+2k b=3i+2j-2k c=2i-3j+k calculate a.(b×c)",
		answer: "6",
		options: [
			"-6",
			"3",
			"6",
			"12"
		]
	},
	{
		numb: 15,
		question: "Two students carry a 260N suitcase by two straps which make angle 22deegree and 30degree respectively with the vertical calculate the force applied by each student to keep the suitcase in equilibrium",
		answer: "123.6,165.0",
		options: [
			"1.72,39.9",
			"123.6,165.0",
			"26.6,57.2",
			"123.6,1.72"
		]
	},
	{
		numb: 16,
		question: "vector A,B,C has an equilibrant of of?",
		answer: "A+B+C",
		options: [
			"-(A+B+C)",
			"A+B+C",
			"A-B-C",
			"-(B-C)+B"
		]
	},
	{
		numb: 17,
		question: "A particle projected with a velocity of 40m/s at an elevation of 60° calculate the Vertical Component of velocity at height of 50m",
		answer: "2√25m/s",
		options: [
			"4√115m/s",
			"25√3m/s",
			"2√545m/s",
			"2√25m/s"
		]
	},
	{
		numb: 18,
		question: "A single force which produce the same effect as a set of forces acting together at a point is known as the ?",
		answer: "Resultant",
		options: [
			"component",
			"Equilibrant",
			"Resistant",
			"Resultant"
		]
	},
	{
		numb: 19,
		question: "An example of scalar quantity",
		answer: "Electric charge",
		options: [
			"velocity",
			"Electric charge",
			"Momentum",
			"Weight"
		]
	},
	{
		numb: 20,
		question: "The resultant of two Forces acting on an object is Maximum when the angle between them is ?",
		answer: "0°",
		options: [
			"180°",
			"90°",
			"45°",
			"0°"
		]
	},
	{
		numb: 21,
		question: "During inelastic collision",
		answer: "Only momentum is conserved",
		options: [
			"momentum and energy conserved",
			"Only momentum is conserved",
			"Momentum and energy not conserved",
			"Momentum and energy increases"
		]
	},
	{
		numb: 22,
		question: "A 65kg sprinter completes a 100m race in 9.83s calculate the average kinetic energy of the sprinter",
		answer: "3.36kJ",
		options: [
			"26.3kJ",
			"45.2kJ",
			"3.36kJ",
			"20.0kJ"
		]
	},
	{
		numb: 23,
		question: "If a plane is beign Rotated through an angle of 30° above the Horizontal the Reaction will rotate through?",
		answer: "30°",
		options: [
			"150°",
			"30°",
			"60°",
			"120°"
		]
	},
	{
		numb: 24,
		question: "The Reaction of a body is always ______ to the plane",
		answer: "Perpendicular",
		options: [
			"parallel",
			"Linear",
			"Perpendicular",
			"Co-linear"
		]
	},
	{
		numb: 25,
		question: "According to conservation of energy",

		answer: "K.E=P.E",
		options: [
			"K.E=P.E",
			"2K.E=3P.E",
			"K.E+P.E=0",
			"2K.E=P.E"
		]
	},
	{
		numb: 26,
		question: "A body which moves from rest with a uniform acceleration travels 18m during the third second what will be its Velocity at yhe end of eight second",
		answer: "57.6m/s",
		options: [
			"905m/s",
			"57.6m/s",
			"125m/s",
			"39.5m/s"
		]
	},
	{
		numb: 27,
		question: "The Equation connecting the Reaction of a body on a horizontal and inclined plane is?",
		answer: "R=mgcosØ=mg",
		options: [
			"Rcosø=mg",
			"R=mgsinø=mgcosø",
			"R=mgtanø=mg",
			"R=mgcosø==mg"
		]
	},
	{
		numb: 28,
		question: "The equilibrium position of objects in any feild correspond to situations of?",
		answer: "Minimum Potential Energy",
		options: [
			"Minimum Potential Energy",
			"Maximum Potential Energy",
			"Equipotential Energy",
			"Maximum kinetic energy"
		]
	},
	{
		numb: 29,
		question: "The two forces 4N and 6N act on an object at an angle Of 60° to each other if the object at an angle of 60° to each other if the Object is moved through a distance of 5m in the direction of force. calculate workdone on the body",
		answer: "43.59J",
		options: [
			"36.6J",
			"43.59J",
			"26.8J",
			"13.66J"
		]
	},
	{
		numb: 30,
		question: "The force that attract a body a body undergoing circular motion to the center is ?",
		answer: "Centripenal force",
		options: [
			"Frictional force",
			"Centripetal force",
			
			"Centrifugal force",
			"Gravitational force"
		]
	},
	{
		numb: 31,
		question: "Which course is this?",
		answer: "physics",
		options: [
			"chemistry",
			"Botany",
			"physics",
			"CSC"
		]
	},
	{
		numb: 32,
		question: "The angle between parallel vectors",
		answer: "0°",
		options: [
			"0°",
			"180°",
			"90°",
			"45°"
		]
	},
	{
		numb: 33,
		question: "A car moved 30km in the NE direction then moved 40km due north calculate the total displacement",
		answer: "64.78km",
		options: [
			"70.2km",
			"34.4km",
			"29.2km",
			"64.78km"
		]
	},
	{
		numb: 34,
		question: "Express the speed of light in millimeter per microseconds",
		answer: "3.0×10^5mm/microseconds",
		options: [
			"3.0x10^6mm/microseconds",
			"7.0×10^3mm/microseconds",
			"3.0×10^5mm/microseconds",
			"7.0×10^-6mm/microseconds"
		]
	},
	{
		numb: 35,
		question: "Determine the sum of two vectors each magnitude 10units at an angle of 30°",
		answer: "19.3units",
		options: [
			"44.4units",
			"24.2units",
			"19.3units",
			"35units"
		]
	},
	{
		numb: 36,
		question: "The magnitude of force required to just move 20kg Object along a horizontal surface of coefficient of friction 0.2 is?",
		answer: "40",
		options: [
			"400",
			"40",
			"4.0",
			"0.4"
		]
	},
	{
		numb: 37,
		question: "Vector A of magnitude 10units B of magnitude 30 units and other the rangle between them is 45° Find the magnitude of their resultant",
		answer: "37.7units",
		options: [
			"45.3units",
			"32.2units",
			"43.3units",
			"37.7units"
		]
	},
	{
		numb: 38,
		question: "A boy pushes a book against the vertical wall with a force of 25N Determine the minimum coefficient of static friction between the book and the wall",
		answer: "0.588",
		options: [
			"0.23",
			"0.588",
			"1.98",
			"2.77"
		]
	},
	{
		numb: 39,
		question: "A 475kg load is ejected from a height at a high altitude after the parachute attached to the load opens the load decends with an acceleration of 0.2m/s² calculate the upward the upward thrust on the parachute",
		answer: "4560N",
		options: [
			"2670N",
			"4560N",
			"3750N",
			"92.55N"
		]
	},
	{
		numb: 40,
		question: "The rate of energy transfer between the circulating charge and the circuit is ?",
		answer: "Workdone",
		options: [
			"Current density",
			"Workdone",
			"Power",
			"intensity"
		]
	},
	{
		numb: 41,
		question: "A lob of weight 0.1N Hangs om massless string of length 50cm.A variable horizontal force which increases from Zero is applied to pull the bob until the string makes an angle of 60° with the vertical. The work done is?",
		answer: "0.025J",
		options: [
			"0.005J",
			"0.03J",
			"045J",
			"0.025J"
		]
	},
	{
		numb: 42,
		question: "The unit of couple is measured in ?",
		answer: "Nm",
		options: [
			"Nm",
			"Nm-²",
			"Nm-¹",
			"Nm²"
		]
	},
	{
		numb: 43,
		question: "Starting from rest a car of mass 1000kg Accelerates steadily to 20m/s in 10s The average power developed in the time period is?",
		answer: "20kw",
		options: [
			"40kw",
			"30kw",
			"15kw",
			"20kw"
		]
	},
	{
		numb: 44,
		question: "energy desity is ?",
		answer: "Kgm-²s-²",

		options: [
			"kgm-³s–²",
			"Kgm-¹s²",
			"kgm-²s-²",
			"kgm³s-²"
		]
	},
	{
		numb: 45,
		question: "An engine pumps water from river 10m below it own level and discharge it through a nozzle of diameter 10cm with a speed of 50m/s. Find the power Assuming no losses ",
		answer: "529.9kw",
		options: [
			"529.9kw",
			"144.4kw",
			"336.672kw",
			"1.340kw"
		]
	},
	{
		numb: 46,
		question: "A physical Quantity that has the same dimension as impulse is ?",
		answer: "momentum",
		options: [
			"pressure",
			"momentum",
			"surface tension",
			"energy"
		]
	},
	{
		numb: 47,
		question: "In an experiment the force F is proportional to the desity d velocity v and area a which is F=kd^xv^2yA^z where x,y,z are integer k is a dimensionless constant. find x,y,z ",
		answer: "1,1,1",
		options: [
			"1,1,1",
			"1,-1,2",
			"½,½,½",
			"1,0,1"
		]
	},
	{
		numb: 48,
		question: "A body moving with uniform velocity",
		answer: "minimum acceleration",
		options: [
			"maximum acceleration",
			"maximum retardation",
			"minimum acceleration",
			"minimum retardation"
		]
	},
	{
		numb: 49,
		question: "A physical quantity with both magnitude and direction is ?",
		answer: "vector quantity",
		options: [
			"scalar quantity",
			"vector quantity",
			"linear quantity",
			"nuetral quantity"
		]
	},
	{
		numb: 50,
		question: "A stone and a feather are dropped from the same hight above the earth surface ignoring air resistance. which is correct?",
		answer: "The feather and stone will drop the same time",
		options: [
			"The feather and stone will drop the same time",
			"The stone will reach the ground first",
			"The feather will blow away",
			"Non of the Above"
		]
	},
];
