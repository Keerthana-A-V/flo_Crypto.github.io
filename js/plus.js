

    function generatefloid()
    {
        let flo =floCrypto.generateNewID()
        document.getElementById("private").innerHTML="Private key: " + flo.privKey; 
        document.getElementById("pub").innerHTML="Public key: "+ flo.pubKey;
        document.getElementById("flo").innerHTML="FLO ID: "+ flo.floID;
        /* alert( "Private key: "+ flo.privKey);
       alert("Public Key: "+flo.pubKey);
       alert("FLO ID: "+flo.floID);*/
    }
      function publickeyhex()
      {
          let privatekey = document.getElementById("idprivate").value;
         var pubkey=floCrypto.getPubKeyHex(privatekey)
         document.getElementById("publickeyhex").innerHTML="Public Key: "+pubkey;
    
      }

      function calcfloid()
      {
          let keyy= document.getElementById("key").value;
         var floid =floCrypto.getFloID(keyy)
         document.getElementById("floo").innerHTML="FLO ID: "+floid
           // alert(floid);
      }
      function verifyprivatekey()
      {
          let privatekey=document.getElementById("privatek").value;
          let pubKey_floID= document.getElementById("keey").value;
        var ver= Boolean (floCrypto.verifyPrivKey(privatekey, pubKey_floID))
           
            if(ver==true)
            {
                document.getElementById("verify").innerHTML="TRUE,   The private-key is verified for the given public-key or flo-ID."
            }
            else
            {
                document.getElementById("verify").innerHTML="FALSE,   The private-key is not verified for the given public-key or flo-ID. "
    
            }
    
      }

      function signdata()
      { 
         let data=document.getElementById("msg5").value;
         let privKey=document.getElementById("type5").value; 
         var signature =floCrypto.signData(data, privKey)
         document.getElementById("signed").innerHTML="Signed data is,"
         document.getElementById("signatures").innerHTML= signature
        // alert(signature);
      }

      function verification()
      {
          let data=document.getElementById("d").value;
          let sigg=document.getElementById("s").value;
          let val=document.getElementById("p").value;
          var r=(floCrypto.verifySign(data,sigg,val))
         if(r==true)
         {
             document.getElementById("v1").innerHTML="TRUE, Signature is verified!!";
         }
         else
         {
             document.getElementById("v1").innerHTML="FALSE, Signature is not verified!!";
         }
      }
     function validateflo()
      {
        let floid=document.getElementById("flo1").value;
          var res=Boolean(floCrypto.validateAddr(floid))
          if(res==true)
          {
          document.getElementById("write1").innerHTML="TRUE, FLO ID is validated.";
          }
          else
          {
              document.getElementById("write1").innerHTML="FALSE, FLO ID is not validated.";

          }
      }
      function genrandomint()
      {
          let minval=document.getElementById("genrandom1").value;
          let maxval=document.getElementById("genrandom2").value;
          var result= floCrypto.randInt(minval, maxval)
          document.getElementById("write4").innerHTML="The random integer is : "+result;

      }
      function genrandomstr()
      {
          let str=document.getElementById("randomstr").value;
          let val=document.getElementById("val3").value;
          var randstring= floCrypto.randString(str, val)
          document.getElementById("write7").innerHTML="Random string is,"
          document.getElementById("write8").innerHTML=randstring

      }

      function createshare()
      {
          let data=document.getElementById("shdata").value;
          let numshare=parseInt( document.getElementById("shshare").value);
          let limit =parseInt( document.getElementById("shnumber").value);
          const x=[];
          var i=0;  
         x.push(floCrypto.createShamirsSecretShares(data,numshare,limit));
         document.getElementById("write2").innerHTML="The shares are,";
         document.getElementById("write3").innerHTML=x;
      }  

      const y=[];
      function button()
      {
         
          y.push(document.getElementById("ar1").value);
          document.getElementById("ar1").value='';
        //  alert("pushed!!");
     //     for(var i=0;i<y.length;i++)
       //   alert(y[i]);
      }

      function retrievesecret()
      {
       let shresult= floCrypto.retrieveShamirSecret(y)
       if(shresult==false)
       {
        document.getElementById("write11").innerHTML="The data is not retrieved!!";
 
       }
       else
       document.getElementById("write11").innerHTML="The Original data is,"+"<br>"+shresult;
      }

      const z=[];
      function button1()
      {
        z.push(document.getElementById("ar9").value);
        document.getElementById("ar9").value='';

        //alert("pushed!!");
      }
      function verifysecret()
      {
          let c=document.getElementById("ar8").value
        var z1= Boolean( floCrypto.verifyShamirsSecret(z,c))
        if(z1==true)
        {
            document.getElementById("write21").innerHTML="TRUE,The shares are verified!!";
        }
        else
        {
            document.getElementById("write21").innerHTML="FALSE,The shares are not verified!!";

        }
      }

      function resetbtn()
      {
        var con= confirm("Do you really want to clear the array?");

            if(con==true)
         {
            y.length=0;            
         }

      }
      function resetbtn1()
      {
          var con1= confirm("Do you really want to clear the array?");
          if(con1==true)
          {
              z.length=0;
          }
      }