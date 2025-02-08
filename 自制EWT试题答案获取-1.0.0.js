// ==UserScript==
// @name         	自制EWT试题答案获取
// @name:en      	EWT360_KILL
// @namespace    	https://github.com/EWT360-KILL/EWT360_KILL
// @version      	1.0.0
// @description  	自动获取升学e网通试题答案，包括但不限于课后习题、试卷答案、周培优。
// @description:en	Automatically obtain the answers to the questions on the EWT360, including but not limited to after-class exercises, test paper answers, and Zhou Peiyou.
// @author       	EWT360_KILL
// @match        	https://web.ewt360.com/mystudy/
// @icon         	https://web.ewt360.com/common/img/favicon.ico
// @grant        	none
// @license      	GPL-3.0-or-later
// ==/UserScript==

/**
 * ---------------------------
 * Time: 2025/1/21 19:28.
 * Author: EWT360_KILL
 * View: https://ewt360-kill.github.io/
 * ---------------------------
 */

(function() {
    'use strict';

    const hashParams=new URLSearchParams(window.location.hash.split('?')[1]);
    const paperId=hashParams.get('paperId');
    paperId&&window.open(`https://web.ewt360.com/etiku/detailpreview?paperId=${paperId}&paperType=kz`,'_blank');
})();
