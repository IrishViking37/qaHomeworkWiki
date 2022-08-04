function getSpecial(weekday: string): string{
    switch(weekday){
        case "Monday":
        return "Family night, kids eat free(under 12)";
        break;
        case "Tuesday":
            return "Taco Tuesday 50% OFF all Tacos"
            break;
            case "Wednesday":
                return " Waffle Wednesday"
                break;
            case "Thursday":
                return "Traditional Thursday";
                break;
            case "Friday":
                return "Fajita Friday's";
                break;
                default:
                    return "Enjoy your weekend with 30% off Ice Cream";
    }
}
console.log(getSpecial("Monday"));
console.log(getSpecial("Tuesday"));
console.log(getSpecial("Wednesday"));
console.log(getSpecial("Thursday"));
console.log(getSpecial("Friday"));
console.log(getSpecial("Sunday"));