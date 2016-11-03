function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ ctrl.noCaps(username) }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: function($scope){
			this.noCaps = function(username){
				return username.toLowerCase()
			}
		},
		controllerAs: 'ctrl'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);