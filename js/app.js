var Cat = function(data){
	this.clickCount = ko.observable(data.clicks);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.level = ko.computed(function() {
		if(this.clickCount() <= 10){
			return "Infant";
		}
		else if(this.clickCount() > 10 && this.clickCount() <=25){
			return "Teen";
		}
		else
			return "Old";
	}, this);

	this.nicknames = ko.observableArray(['Tabby','Crookshanks', 'T-bone']);
};

var ViewModel = function(){
	this.currentCat = ko.observable(new Cat({
		clicks: 0,
		name: 'Purr',
		imgSrc: 'img/22252709_010df3379e_z.jpg'
	}));
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());