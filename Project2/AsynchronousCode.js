// Task 1: Declare The Task Array and The Interval ID
let oneTimeTasks = [];
let monitoringTaskId; 
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	oneTimeTasks.push({function: func, delay: delay});
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	for (const oneTimeTask of oneTimeTasks){
		setTimeout(oneTimeTask.function, oneTimeTask.delay);
	}
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	console.log("Starting the monitoring process...")
	monitoringTaskId = setInterval(
		function(){ 
			console.log("Checking systems...");
			console.log(`Oxygen Capacity: ${(Math.random() * 100).toFixed(2)}%`);
			console.log(`Power Grid: ${Math.random() > 0.1 ? "Stable" : "Critical"}`);
			console.log(`Thruster convergence: ${Math.random() > 0.05 ? "All systems go" : "Communication error"}`);
			console.log('Airspace conditions optimal.')
			console.log("\n")
		}
		, 3000
	);
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	clearInterval(monitoringTaskId);
	console.log("Monitoring halting.")
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	let timeLeft = duration;
	console.log(`Countdown started: ${timeLeft} seconds`);
	const countdownId = setInterval(
		function (){
			timeLeft--;
			console.log(`T-minus ${timeLeft} seconds`);
			if (timeLeft <= 0){
				clearInterval(countdownId);
				console.log("Liftoff!");
			}
		}
		, 1000
	)
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	//Begining of pre-launch system check
	startMonitoring();
	addOneTimeTask(function (){console.log("Pre-launch system check complete.");}, 11000);
	addOneTimeTask(stopMonitoring, 10000);
	addOneTimeTask(
		function (){
			startCountdown(5);
		}, 12000
	);
	runOneTimeTasks();
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
}

scheduleMission(); // Starts the mission.