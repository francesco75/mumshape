function time(a,i){
         if (a==0){
                text="The Time is " +i+ " am  Sleeping, please . Don't Disturb "                  
         }
         
        switch (a) {
           case 7:
              text = "The Time is " +a+ " Am Wake up, Shower and shave .";
                 break;
           case 8:
            text = "The Time is " +a+ " Am Breakfast, Cereals and Coffee . ";
             break;
        case 9:
              text = "The Time is " +a+ " Am Wake up, Shower and shave .Take the train going to the job";
                 break;
        case 10:
            text = "The Time is " +a+ " Am Start the job . ";
             break;
        case 11:
              text = "The Time is " +a+ " Am Planning the job project .";
                 break;
        case 12:
            text = "The Time is " +a+ " Pm Lunchtime  . ";
             break;   
        case 13:
              text = "The Time is " +a+ "   Start the job again .";
                 break;
        case 14:
            text = "The Time is " +a+ "  Meeting with the group job. ";
             break;
        case 15:
              text = "The Time is " +a+ "  Small Break Coffee .";
                 break;
        case 16:
            text = "The Time is " +a+ "  Planning job for tomorrow with my colleagues . ";
             break;
        case  17 :
              text = "The Time is " +a+ "   Finish the job .";
                 break;
        case 18:
            text = "The Time is " +a+ "  Shopping Food . ";
             break;
        case 19:
              text = "The Time is " +a+ "  Shower .";
                 break;
        case 20:
            text = "The Time is " +a+ "  Dinner and watch the TV . ";
             break;
        case 21:
              text = "The Time is " +a+ "  Finish the Day and sleep .";
                 break;
       case 22:
            text = "The Time is " +a+ "  Sleeping .Don't Disturb,please. ";
             break;
       case 23 :
              text = "The Time is " +a+ "  Sleeping .Don't Disturb,please.";
                 break;
                                             

           
}

         document.getElementById("demo").innerHTML = text;

       };
