Array.prototype.remove = function(el){
    var index = this.indexOf(el);
    if(index != -1) {
        this.splice(index, 1);
    }
}

Array.prototype.add = function(el){
    if(this.indexOf(el) == -1){
        this.push(el);
    }
}

courseList = [];

function getFromCookies() {
  //pull courseList from cookies
}

function pushToCookies() {
  //set cookie as courseList
}

function addClass(c) {
  courseList.add(c);
}

function removeClass(c) {
  courseList.remove(c);
}

function calcGPA() {
  totalWeight = 0;
  totalValue = 0;
  console.log(courseList);

  for(i = 0; i < courseList.length; i ++) {
    c = courseList[i];
    totalWeight += c.cweight;
    totalValue += c.isAP ? 0.5*c.cweight : 0;
    switch (c.cgrade) {
      case "A+":
        totalValue+=4.3*c.cweight;
        break;
      case 'A':
        totalValue+=4*c.cweight;
        break;
      case 'A-':
        totalValue+=3.7*c.cweight;
        break;
      case 'B+':
        totalValue+=3.3*c.cweight;
        break;
      case 'B':
        totalValue+=3*c.cweight;
        break;
      case 'B-':
        totalValue+=2.7*c.cweight;
        break;
      case 'C+':
        totalValue+=2.3*c.cweight;
        break;
      case 'C':
        totalValue+=2*c.cweight;
        break;
      case 'C-':
        totalValue+=1.7*c.cweight;
        break;
      case 'D+':
        totalValue+=1.3*c.cweight;
        break;
      case 'D':
        totalValue+=1*c.cweight;
        break;
      case 'D-':
        totalValue+=0.7*c.cweight;
        break;
      case 'F':
        totalValue+=0;
        break;
      default:
        totalValue+=0;
        break;
    }
  }

  console.log(totalValue/totalWeight);
  return Math.round(100*totalValue/totalWeight)/100;
}

function testCase(string) {
  switch (string) {
    case "A+":
      console.log("A+");
      break;
    case "A":
      console.log("A");
      break;
    case "A-":
      console.log("A-");
      break;
    default:
      console.log("FAIL");
      break;
  }
}
