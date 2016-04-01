import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('editFormShowing');
    },
    saveQuestionEdit(question) {
      var formInputs = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.toggleProperty('editFormShowing');
      this.set('name', "");
      this.set('author',"");
      this.set('notes',"");
      this.sendAction('saveQuestionEdit', question, formInputs);
    }
  }
});
