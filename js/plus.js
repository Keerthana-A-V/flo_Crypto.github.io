

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

          var r=Boolean(floCrypto.verifySign(data,sigg,val))
          if(r==true)
          {
          document.getElementById("verify").innerHTML="TRUE, Signature is verified." 
          }
          else
          {
              document.getElementById("verify").innerHTML="FALSE, Signature is not verified." 

          }

          alert(r);
      }

      function validateflo()
      {
          let floid=document.getElementById("flo").value;
          var res=Boolean( floCrypto.validateAddr(floid))
          if(res==true)
          {
          document.getElementById("write1").innerHTML="TRUE, FLO ID is validated."
          }
          else
          {
              document.getElementById("write1").innerHTML="FALSE, FLO ID is not validated."

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
          let numshare= document.getElementById("shshare").value;
          let limit =document.getElementById("shnumber").value;
          const x=[];  
         x.push(floCrypto.createShamirsSecretShares(data,3,3));
        alert(x);
        document.getElementById("write4").innerHTML=x;
         document.getElementById("write2").innerHTML="The shares are,"
         document.getElementById("write3").innerHTML=floCrypto.createShamirsSecretShares(data,numshare,limit)


       /*  for(var i=0;i<numshare;i++)
         {
             var newDiv=document.createElement("div");
             var newContent=x[i];
             newDiv.appendChild(newContent);
             var currentDiv=document.getElementById("write3");
             document.body.insertBefore(newDiv,currentDiv);
         }*/
  
      }    
      const y=[];
      function button()
      {
         
          y.push(document.getElementById("ar1").value);
        alert("pushed!!");
     //     for(var i=0;i<y.length;i++)
       //   alert(y[i]);
      }

      function retrievesecret()
      {
          alert(y.length);
       let shresult= floCrypto.retrieveShamirSecret(y)
       document.getElementById("write11").innerHTML="the Original data is,"+"<br>"+shresult;
      }
      const z=[];
      function button1()
      {
        z.push(document.getElementById("ar9").value);
        alert("pushed!!");
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
     /* function createshare()
      {
          let str =document.getElementById("shdata") .value;
          let  total_shares=document.getElementById("shshare") .value;
          let threshold_limit=document.getElementById("shnumber") .value;
          var i=0;
           let x = new Array(); 
           //alert(typeof(x));               
          // for(var i=0;i<t;i++)
           x = floCrypto.createShamirsSecretShares(str,total_shares,threshold_limit)
       for (i=0;i<total_shares;i++);
         {
             //alert(x[i]);
             document.getElementById("write3").innerHTML = x[0]+"<br>"+x[1];
         }
      }*/






