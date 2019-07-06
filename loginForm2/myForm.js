var User = {
    firstName: "",
    lastName:"",
    email:"",
    city:""
    }
    var UserList=[];
    $(".login").on("click", "#myBtn", function () {
        var myName = $("#ad").val()
        var mySurname = $("#soyad").val()
        var myEmail = $("input[type = 'email']").val()
        var myCity = $("#city option:selected").text();
        

        if (myName == "" || mySurname== "" || myEmail== "" || myCity == undefined) {
            return;
        }
        
            User.firstName=myName;
            User.lastName=mySurname;
            User.email=myEmail;
            User.city=myCity;
        UserList.push(User);
        UserList[0]=User.firstName;
        UserList[1]=User.lastName;
        UserList[2]=User.email;
        UserList[3]=User.city;
        
        
         var tables='<table id="new"><tr style="border:2px solid black"><td style="border:2px solid black">' + UserList[0]+ '</td> <td style="border:2px solid black">' + UserList[1] + '</td><td style="border:2px solid black">' + UserList[2] + '</td> <td style="border:2px solid black">' + UserList[3] + '</td><td style="border:2px solid black"><button  id= "MyDelete"  style="background-color:red;color:white">  Delete </button></td></tr></table>'
    
        localStorage.setItem("users",UserList)
        
        $(".login").hide()
        $(".myTable").append(tables).show()
        
        var UserData=localStorage.getItem("users")
        console.log(UserData)
       
     
    })
    $(".myTable").on("click", "#MyDelete", function () {
        $(this).parents("tr").remove()
            
    })
   
    
    var UserData=localStorage.getItem("users")

    if(UserData[0]&&UserData[1]&&UserData[2]&&UserData[3]) {
    $(".login").hide()
    $(".myTable").append('<table id="new"><tr style="border:2px solid black"><td style="border:2px solid black">' + UserData[0]+ '</td> <td style="border:2px solid black">' + UserData[1] + '</td><td style="border:2px solid black">' + UserData[2] + '</td> <td style="border:2px solid black">' + UserData[3] + '</td><td style="border:2px solid black"><button  id= "MyDelete"  style="background-color:red;color:white">  Delete </button></td></tr></table>').show()

    }

    $("#logout").click(function(){
        // localStorage.removeItem("users")
        $(".login").show()
        $(".myTable").hide()
     
    })
