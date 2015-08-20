
/*jslint indent: 2 */
/*global $: false, togglbutton: false, document: false*/

'use strict';

togglbutton.render('.container-toggl:not(.toggl)', {observe: true}, function () {
  var descFunc, link;

  descFunc = function () {
    return $('.ui-dialog').querySelector('.js-task-name').firstChild.innerHTML;
  };

  link = togglbutton.createTimerLink({
    className: 'meistertask',
    description: descFunc,
    projectName: 'MeisterTask'
  });

  $('.container-toggl').classList.remove('h-hidden');
  $('.container-toggl').appendChild(link);
});
