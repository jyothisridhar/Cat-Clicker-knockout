var initialCats = [
	{
		clicks: 0,
		name: 'Tabby',
		imgSrc: 'img/tabby.jpg',
		nicknames: ['Tabby','Crookshanks', 'T-bone']
	},
	{
		clicks: 0,
		name: 'softkitty',
		imgSrc: 'img/absolem.jpg',
		nicknames: ['purr','Crookshanks']
	},
	{
		clicks: 0,
		name: 'Crookshanks',
		imgSrc: 'img/crookshanks.jpg',
		nicknames: ['ron','Crookshanks', 'razor']
	},
	{
		clicks: 0,
		name: 'Happy',
		imgSrc: 'img/happy.jpg',
		nicknames: ['pharel','Crookshanks', 'T-bone']
	},
	{
		clicks: 0,
		name: 'Sleepy',
		imgSrc: 'img/sleepy.jpg',
		nicknames: ['Zzzz','Crookshanks', 'T-bone']
	}
];

var Cat = function(data){
	this.clickCount = ko.observable(data.clicks);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);
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
};

var ViewModel = function(){
	var self = this;
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.selectCat = function(cat){
		self.currentCat(cat);
	};
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());