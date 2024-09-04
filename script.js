var names = new Array();
names[0]="Yin";
names[1]="Jean";
names[2]="Johnson";
names[3]="jimmy";
names[4]="pork";
names[5]="frankie";
names[6]="lando";
names[7]="peter";
names[8]="lime";
names[9]="john";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==="J" || names[i].charAt(0) === "j" ){
       console.log("Goodbye " + names[i])
	}
	else{
		console.log("Hello " + names[i]);
	}
}