import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('questionFormShowing');
    },
    saveQuestion() {
      var formInputs = {
        content: this.get('content') ? this.get('content'):"",
        author: this.get('author') ? this.get('author'):"",
        notes: this.get('notes') ? this.get('notes'):"",
        // answer: this.get('answer'),
      };
      this.toggleProperty('questionFormShowing');
      this.set('name', "");
      this.set('author',"");
      this.set('notes',"");
      this.sendAction('saveQuestion', formInputs);
    }
  }
});
