// Date Class
// Get Current Year
// Get Current Month
// Get Current Date

const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();

export default function main() {
  console.log(currentYear, currentMonth, currentDate);
}
