
// function a1(){
//     a=document.form1.text3.value  //Regular Earnings
//     b=a*10/100
//     c=a*5/100
//     f=a*10/100
//     g=a*10/100
//     n=a*6/100
//     l=a*7/100
//     d=a*3/100
//     h=eval(a)+eval(g)+eval(c)+eval(n)	
//     i=eval(b)+eval(d)+eval(l)	
//     f=eval(h)-eval(i)
//     document.form1.text4.value=b  //Federal Withholding
//     document.form1.text5.value=c  //Intensive Pay
//     document.form1.text7.value=d  //Loan
//     document.form1.text10.value=f //Current NET Salary
//     document.form1.text6.value=g  //Bonus
//     document.form1.text8.value=h  //Total Earnings
//     document.form1.text9.value=i  //Total Deduction
//     document.form1.text11.value=l  // Provident Fund
//    document.form1.text12.value=n  // Overtime
//     }

function a1(){
    a=document.form1.text1.value; //Rate
    b=document.form1.text2.value; //hour
    c=a*b;
    d=c*3/100;
        e=c*10/100
        f=c*10/100
        g=c*6/100
        n=c*6/100
        l=c*5/100
        d=c*3/100
        h=eval(c)+eval(e)+eval(f)+eval(n)	
        i=eval(g)+eval(d)+eval(l)	
        j=eval(h)-eval(i)
        document.form1.text3.value=c   //Regular Earnings
        document.form1.text4.value=d  //Federal Withholding
        document.form1.text5.value=e  //Intensive Pay
        document.form1.text7.value=g  //Loan
        document.form1.text10.value=j //Current NET Salary
        document.form1.text6.value=f  //Bonus
        document.form1.text8.value=h  //Total Earnings
        document.form1.text9.value=i  //Total Deduction
        document.form1.text11.value=l  // Provident Fund
       document.form1.text12.value=n  // Overtime
}