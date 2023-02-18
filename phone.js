const ua = detect.parse(navigator.userAgent)

// If Device is Iphone or Adroid say device not supported
if(ua.device.family === 'iPhone')
{
    alert("Website is currently unsupported on phones including Iphones, sorry.");
}
else if(ua.device.family === 'android')
{
    alert("Website is currently unsupported on phones including android, sorry.");
}