import angular from 'angular'
import { DtaDragDirective } from './dta-drag.directive'
import { DtaDropDirective } from './dta-drop.directive'

export const DtaDragDropModule =

angular.module('dtaDragDrop', [])

  .directive('dtaDrag', DtaDragDirective)
  .directive('dtaDrop', DtaDropDirective)

  .name
