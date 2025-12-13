//  union is used when we need to store the multiple variables



var studentData :string | number | number[] = "jawad"


studentData = 10 

studentData = [10 , 20 , 30 ]


function fruitsName() : string | string [] {
    var itemFruit = 1
    if(itemFruit == 1)
        return "apple"
    else 
        return ["apple" , 'manago' , 'orange']
}
console.log(fruitsName()
)