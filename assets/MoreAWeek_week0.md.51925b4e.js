import{_ as e,c as a,o as n,d as l}from"./app.a97b467a.js";const f='{"title":"\u7B2C\u4E00\u671FAART\u6253\u5361\u8BA1\u5212","description":"","frontmatter":{},"headers":[{"level":2,"title":"Algorithm\uFF1A","slug":"algorithm\uFF1A"},{"level":3,"title":"2. \u4E24\u6570\u76F8\u52A0","slug":"_2-\u4E24\u6570\u76F8\u52A0"},{"level":3,"title":"3. \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","slug":"_3-\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32"},{"level":2,"title":"Review\uFF1AProgressive image loading in React: Tutorial","slug":"review\uFF1Aprogressive-image-loading-in-react-tutorial"},{"level":2,"title":"Tip\uFF1Acss \u5E03\u5C40","slug":"tip\uFF1Acss-\u5E03\u5C40"}],"relativePath":"MoreAWeek/week0.md"}',r={},t=l(`<h1 id="\u7B2C\u4E00\u671Faart\u6253\u5361\u8BA1\u5212" tabindex="-1">\u7B2C\u4E00\u671FAART\u6253\u5361\u8BA1\u5212 <a class="header-anchor" href="#\u7B2C\u4E00\u671Faart\u6253\u5361\u8BA1\u5212" aria-hidden="true">#</a></h1><h4 id="\u672C\u5468-aart" tabindex="-1">\u672C\u5468 AART <a class="header-anchor" href="#\u672C\u5468-aart" aria-hidden="true">#</a></h4><ul><li>A: \u4E24\u6570\u76F8\u52A0</li><li>A: \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32</li><li>R: Base: An Acid Alternative</li><li>T: \u7F16\u7A0B\u65F6\u5982\u4F55\u547D\u540D</li></ul><h2 id="algorithm\uFF1A" tabindex="-1">Algorithm\uFF1A <a class="header-anchor" href="#algorithm\uFF1A" aria-hidden="true">#</a></h2><h3 id="_2-\u4E24\u6570\u76F8\u52A0" tabindex="-1"><a href="https://leetcode.cn/problems/add-two-numbers/" target="_blank" rel="noopener noreferrer">2. \u4E24\u6570\u76F8\u52A0</a> <a class="header-anchor" href="#_2-\u4E24\u6570\u76F8\u52A0" aria-hidden="true">#</a></h3><p>\u7ED9\u4F60\u4E24\u4E2A \u975E\u7A7A \u7684\u94FE\u8868\uFF0C\u8868\u793A\u4E24\u4E2A\u975E\u8D1F\u7684\u6574\u6570\u3002\u5B83\u4EEC\u6BCF\u4F4D\u6570\u5B57\u90FD\u662F\u6309\u7167 \u9006\u5E8F \u7684\u65B9\u5F0F\u5B58\u50A8\u7684\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u8282\u70B9\u53EA\u80FD\u5B58\u50A8 \u4E00\u4F4D \u6570\u5B57\u3002</p><p>\u8BF7\u4F60\u5C06\u4E24\u4E2A\u6570\u76F8\u52A0\uFF0C\u5E76\u4EE5\u76F8\u540C\u5F62\u5F0F\u8FD4\u56DE\u4E00\u4E2A\u8868\u793A\u548C\u7684\u94FE\u8868\u3002</p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u9664\u4E86\u6570\u5B57 0 \u4E4B\u5916\uFF0C\u8FD9\u4E24\u4E2A\u6570\u90FD\u4E0D\u4F1A\u4EE5 0 \u5F00\u5934\u3002</p><h4 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h4><p>\u9898\u76EE\u662F\u4E24\u94FE\u8868\u8FDB\u884C\u76F8\u52A0\uFF0C\u5229\u7528\u53CC\u6307\u9488\u7684\u65B9\u5F0F\uFF0C\u4E00\u4E2A\u6307\u5411\u65B0\u94FE\u8868\u7684\u5934\u90E8\uFF0C\u4E00\u4E2A\u968F\u7740\u904D\u5386\u94FE\u8868\u8FDB\u884C\u79FB\u52A8\uFF0C\u5728\u5C06\u4E24\u4E2A\u94FE\u8868\u5F53\u524D\u7684\u8282\u70B9\u8FDB\u884C\u76F8\u52A0\u7684\u65F6\u5019\uFF0C\u9700\u8981\u7528\u4E00\u4E2A\u53D8\u91CF\u6765\u6807\u5FD7\u8FDB\u4F4D\u7B26\uFF0C\u5F53\u524D\u7684\u548C\u5927\u4E8E9\uFF0C\u5C31\u5C06\u8FDB\u4F4D\u7B26\u8BBE\u4E3A1\uFF0C\u53CD\u4E4B\u4E3A0\u3002\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\u4E24\u4E2A\u4E2A\u4E3A\u76F8\u52A0\u662F\u4E0D\u4F1A\u5927\u4E8E18\u7684\u3002\u9700\u8981\u8003\u8651\u7684\u8FB9\u754C\u60C5\u51B5\uFF1A</p><ol><li>\u5934\u5C3E\u6307\u9488\u521A\u5F00\u59CB\u6307\u5411\u4E24\u94FE\u8868\u9996\u8282\u70B9\u4E4B\u548C\u3002</li><li>\u5F53\u904D\u5386\u5230\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5224\u65AD\u8FDB\u4F4D\u7B26\u3002</li></ol><h4 id="\u4EE3\u7801\u601D\u60F3\uFF1A" tabindex="-1">\u4EE3\u7801\u601D\u60F3\uFF1A <a class="header-anchor" href="#\u4EE3\u7801\u601D\u60F3\uFF1A" aria-hidden="true">#</a></h4><ol><li>\u94FE\u8868\u7684\u79FB\u52A8\uFF1Ahead.next = \u65B0\u503C\uFF1B head = head.next;</li><li>\u4E24\u94FE\u8868\u7684\u957F\u5EA6\u4E0D\u540C\u662F\uFF0C\u503C\u8BBE\u4E3A0\u3002const x1 = l1 ? la.val : 0</li><li>\u4FDD\u7559\u5F53\u524D\u548C\u7684\u4F59\u6570(sum % 10)\uFF0C\u8FDB\u4F4D\u7B26\u4FDD\u7559\u5F53\u524D\u548C\u7684\u6574\u9664\u6570(0\u6216\u80051)</li></ol><h4 id="\u89E3\u9898" tabindex="-1">\u89E3\u9898 <a class="header-anchor" href="#\u89E3\u9898" aria-hidden="true">#</a></h4><div class="language-"><pre><code>/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode();
    let prev = dummyHead;
    let add = 0;
    while (l2 || l1 || add &gt; 0) {
        var a : number = 0
        var b : number = 0
        if (l1) {
             a = l1.val
             l1 = l1.next
        }
        if (l2) {
            b = l2.val
            l2 = l2.next
        }
        const sum = a + b + add;
        prev.next = new ListNode(sum % 10);
        add = Math.floor(sum / 10);
        prev = prev.next;
    }

    return dummyHead.next;
};
</code></pre></div><h3 id="_3-\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" tabindex="-1"><a href="https://leetcode.cn/problems/longest-substring-without-repeating-characters/" target="_blank" rel="noopener noreferrer">3. \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32</a> <a class="header-anchor" href="#_3-\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" aria-hidden="true">#</a></h3><p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 <code>s</code> \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684 <strong>\u6700\u957F\u5B50\u4E32</strong> \u7684\u957F\u5EA6\u3002</p><h4 id="\u601D\u8DEF-1" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF-1" aria-hidden="true">#</a></h4><p>\u8FD9\u9053\u9898\u4E3B\u8981\u770B\u4E24\u4E2A\u5173\u952E\u8BCD\uFF1A \u65E0\u91CD\u590D \uFF0C\u6700\u957F\u3002\u65E0\u91CD\u590D\u53EF\u4EE5\u7528\u5230\u6570\u636E\u7ED3\u6784set\uFF0C\u8BB0\u5F55\u5F53\u524D\u7684\u503C\u3002\u6700\u957F\u5219\u7528Math.max()\u6570\u5B66\u51FD\u6570\u53D6\u5F97\u6700\u5927\u503C\u3002</p><p>\u5B50\u4E32\u662F\u8FDE\u7EED\u7684\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u7528\u5230\u6ED1\u52A8\u7A97\u53E3\uFF0C\u5176\u5B9E\u5C31\u662F\u4E24\u4E2A\u6307\u9488\uFF0C\u4E00\u4E2A\u7EF4\u62A4\u5DE6\u8FB9\u7684\u8FB9\u754C\uFF0C\u4E00\u4E2A\u7EF4\u62A4\u53F3\u8FB9\u7684\u8FB9\u754C\u3002\u4E24\u4E2A\u6307\u9488\u4E4B\u95F4\u7684\u8DDD\u79BB\u5C31\u662F\u6211\u4EEC\u5B50\u4E32\u7684\u8DDD\u79BB\u3002\u90A3\u4E48\u6700\u957F\u5C31\u662F\u5728\u6BCF\u6B21\u7684\u6ED1\u52A8\u4E2D\u4FDD\u7559\u6700\u957F\u7684\u90A3\u4E2A\u3002\u90A3\u4E48\u4EC0\u4E48\u65F6\u5019\u9700\u8981\u53BB\u79FB\u52A8\u5DE6\u53F3\u6307\u9488\uFF1F\u5DE6\u53F3\u6307\u9488\u4EC0\u4E48\u65F6\u5019\u53C8\u505C\u6B62\u79FB\u52A8\uFF1F</p><p>\u9700\u8981\u8003\u8651\u7684\u8FB9\u754C\u95EE\u9898\uFF1A</p><ol><li>\u6BCF\u6B21\u53BB\u79FB\u52A8\u53F3\u6307\u9488\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5224\u65AD\u662F\u5426\u91CD\u590D\uFF0C\u91CD\u590D\u5219\u79FB\u52A8\u5DE6\u6307\u9488\uFF0C\u5E76\u4E14\u5220\u9664\u96C6\u5408set\u4E2D\u7684\u503C\u3002</li><li>\u53F3\u6307\u9488\u4E0D\u80FD\u8D85\u8FC7\u5B57\u7B26\u4E32\u957F\u5EA6\uFF0C\u5DE6\u6307\u9488\u5C0F\u4E8E\u7B49\u4E8E\u53F3\u6307\u9488\u3002</li></ol><h4 id="\u89E3\u9898-1" tabindex="-1">\u89E3\u9898 <a class="header-anchor" href="#\u89E3\u9898-1" aria-hidden="true">#</a></h4><div class="language-"><pre><code>function lengthOfLongestSubstring(s: string): number {
    let left= 0
    let right = 0
    let res = 0
    let len = s.length
    let set = new Set()
    while(right &lt; len &amp;&amp; left &lt; len) {
        while(set.has(s[right]) &amp;&amp; left &lt; len) {
            set.delete(s[left])
            left ++;
        }
        set.add(s[right])
        res = Math.max(res, right - left + 1)
        right ++
    }
    return res
};
</code></pre></div><h2 id="review\uFF1Aprogressive-image-loading-in-react-tutorial" tabindex="-1">Review\uFF1AProgressive image loading in React: Tutorial <a class="header-anchor" href="#review\uFF1Aprogressive-image-loading-in-react-tutorial" aria-hidden="true">#</a></h2><p><a href="https://blog.logrocket.com/progressive-image-loading-react-tutorial/" target="_blank" rel="noopener noreferrer">\u4E3B\u9898\uFF1AReact \u4E2D\u7684\u6E10\u8FDB\u5F0F\u56FE\u50CF\u52A0\u8F7D</a></p><ol><li>\u53EF\u4EE5\u901A\u8FC7\u7ED9\u56FE\u7247\u8FDB\u884C\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u4EE5\u4FBF\u53EF\u4EE5\u5FEB\u901F\u52A0\u8F7D\uFF0C\u6D4F\u89C8\u5668\u5E03\u5C40\u53EF\u4EE5\u4E0D\u7528\u53BB\u8BA1\u7B97\u56FE\u7247\u9700\u8981\u591A\u5C11\u7684\u52A0\u8F7D\u65F6\u95F4\u3002</li><li>\u4E3A\u56FE\u7247\u8BBE\u7F6E\u7F29\u7565\u56FE -&gt; \u5B9E\u9645\u56FE\u7247\uFF0C\u7528useEffect\u8FDB\u884C\u5BF9\u56FE\u7247\u7684src\u5C5E\u6027\u8FDB\u884C\u76D1\u542C\u3002</li><li>\u5229\u7528CSS\u7684filter\u548Ctransition\u5728\u56FE\u7247\u5B8C\u5168\u52A0\u8F7D\u524D\u5B9E\u73B0\u6A21\u7CCA\u7279\u6548\u3002</li><li>\u5229\u7528\u5E93react-progressive-graceful-image\u8FDB\u884C\u56FE\u7247\u52A0\u8F7D\uFF0C\u5176\u4E2D\u7528\u5230render props(render prop \u662F\u4E00\u4E2A\u7528\u4E8E\u544A\u77E5\u7EC4\u4EF6\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u5185\u5BB9\u7684\u51FD\u6570 prop\u3002)</li></ol><h2 id="tip\uFF1Acss-\u5E03\u5C40" tabindex="-1">Tip\uFF1Acss \u5E03\u5C40 <a class="header-anchor" href="#tip\uFF1Acss-\u5E03\u5C40" aria-hidden="true">#</a></h2><ol><li><p>flex\u5E03\u5C40\u8BBE\u7F6E\u4E00\u884C\u6709\u51E0\u4E2A</p><div class="language-"><pre><code>display: flex;
flex: 1 1 50%;
flex-wrap: nowrap
</code></pre></div></li><li><p>css \u5229\u7528\u4F2A\u5143\u7D20\uFF0C\u9ED8\u8BA4\u662Finline\u884C\u5185\u5143\u7D20\u65E0\u5BBD\u9AD8(\u6240\u4EE5\u770B\u4E0D\u89C1)\uFF0C\u9700\u8981\u53D8\u6210\u5757\u72B6\u5143\u7D20\u624D\u80FD\u5BF9\u5B83\u8BBE\u7F6E\u3002\u53E6\u5916inline-block\u662F\u540C\u4E00\u884C\u663E\u793A\uFF0Cblock\u662F\u975E\u540C\u884C\u663E\u793A</p><div class="language-"><pre><code>.t {
	&amp;::after,
	::before{
			display: inline-block / block / flex
	}
}
</code></pre></div></li></ol>`,29),i=[t];function s(d,o,h,c,p,u){return n(),a("div",null,i)}var m=e(r,[["render",s]]);export{f as __pageData,m as default};
