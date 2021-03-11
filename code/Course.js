function Course(name, weight, ap, grade) {
  this.cname=name;
  this.cweight=weight;
  this.isAP=ap;
  this.cgrade=grade;
}

function changeGrade(c, newGrade) {
  c.cgrade = newGrade;
}
