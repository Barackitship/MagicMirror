/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Greater Sudbury",
				locationID: "5964700",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "9ac7d0ac762927282c0d4bbefd3f0e75"
			}
		},		
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Greater Sudbury",
				locationID: "5964700",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "9ac7d0ac762927282c0d4bbefd3f0e75"
			}
		},
		{
			module: "phone_notification",
			position: "bottom_right",
			header: "Phone Notifications",
			config: {
				accessToken: "o.hDUEQm9SxLtjMGjg4AIRTEROO3I9XSwq",
				numberOfNotifications: 5,
				displayNotificationIcon: true,
				displayMessage: true,
				displayCount: false,
				alert: false,
				fade: true,
				maxCharacters: 50
			}
		},
		{
			module: "compliments",
			position: "bottom_bar",
			config: {
				updateInterval: 120000,
				compliments: {
					anytime: [
						"Don't pick!",
						"You look great :-)",
						"Dayum!",
						"Nice face!",
						"Your skin looks fine, leave it alone!"
					],
					morning: [
						"Good morning!",
						"Good morning grape raisins!",
						"Good morning orange oranges!",
						"Good morning strawberry fraises!",
						"Have a great day!",
						"How was your sleep?",
						"Don't forget your headphones!",
						"Go get em tiger!",
						"You'll do great today!"
					],
					afternoon: [
						"Hello, beautiful!",
						"You look sexy!",
						"Looking good today!",
						"You're doing great!"
					],
					evening: [
						"Wow, you look hot!",
						"You look nice!",
						"Hi, sexy!",
						"Hey great personality!",
						"Hope you had a super day!",
						"Very pretty!"
					]
				}
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
