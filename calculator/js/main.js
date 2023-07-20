let inp = document.getElementById("inp");
function clickN(a) {
  if (a==='del'){
    let s = inp.value.slice(0, inp.value.length-1);
    inp.value = s;
    return;
  }
  if (a==='AC'){
    inp.value = "";
    return;
  }
  if (a==='='){
    if (inp.value!==""){
      inp.value = eval(inp.value)
    }
    return;
  }
  if (inp.value==="" || inp.value.endsWith('+') || inp.value.endsWith('-') || inp.value.endsWith('/') || inp.value.endsWith('*') || inp.value.endsWith('.')){
    if (a === '+' || a==='-' || a==='/' || a==='*' || a==='.'){
      return;
    }
  }
  if (inp.value.includes(".") && a==="."){
    return;
  }
  inp.value += a;
}

