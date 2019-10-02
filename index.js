/* global hexo */
'use strict';

hexo.extend.deployer.register('gitsource', require('./lib/deployer'));
