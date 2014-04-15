function Expander($el) {
  var self = this;

  self.$trigger         = $el;
  self.$el              = $($el.attr('href'));
  self.$title           = self.$trigger.find('.js-title');
  self.openTitle        = self.$trigger.attr('data-open-title');
  self.closedTitle      = self.$trigger.attr('data-closed-title');

  self.init();
}

Expander.prototype = {
  constructor : Expander,

    init : function() {
      var self = this;
      puts('Expander initialized');

      self.$trigger.on('click', function(e){
        e.preventDefault();

        if(self.isExpanded()){
          self.contract();
        }else{
          self.expand();
        }
      });
    },

    expand : function() {
      var self = this;
      self.$el.slideDown('fast', function(){
        self.$title.html(self.openTitle);
      });
      Foundation.libs.equalizer.reflow();
    },

    contract : function() {
      var self = this;

      self.$el.slideUp('slow', function(){
        self.$title.html(self.closedTitle);
      });
    },
    isExpanded : function() {
      var self = this;

      return self.$el.is(":visible");
    }
}

$(window).load(function(){
  $('[data-expander]').each(function(){
    new Expander($(this));
  });
});