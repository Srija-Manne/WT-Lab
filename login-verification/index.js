  function validate()
        {
            var s = document.getElementById("user");
            var s2 = document.getElementById("pass");
            if(s.value.trim() == "")
            {
                alert("Invalid");
                return false;
            }
            else if(s2.value.trim() == "")
            {
                alert("Invalid");
                return false;
            }
            else if(s2.value < 8)
            { 
                alert("Invalid");
                return false;    
            }
        }            
