const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];
const members = users.map(function (array) 
{
	return{
		fullName: `${array.firstName} ${array.lastName}`,
		membershipStatus: array.points > 100 ? "Premium" : "Standard"
	};
});
console.log(members);
