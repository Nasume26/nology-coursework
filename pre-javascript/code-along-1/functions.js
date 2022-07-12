        
        function findPerimeter(width, height) {
            let ammountPerimeter = width + width + height + height;
            console.log ("The perimeter is " + ammountPerimeter);

}

findPerimeter(10, 22)

function findArea(radius) {
    let area;
    area= radius * radius * Math.PI;
    console.log ("The area is " + area);

}

findArea(4)

function findCircumference (diameter) {
    let circumference;
    circumference= Math.PI * diameter;
    console.log ("The Circumference is " + circumference);


}

findCircumference (20)



function getDescription(children,partnerName,location,title) {
    console.log("I am currently a " + title + " living in " + location + ", and married to " + partnerName + " with " + children + " kids.")


}

getDescription(1,"Jane","Geogria","Developer")
getDescription(2,"Betty","Texas","Farmer")
getDescription(4,"Dave","Florida","Janitor")