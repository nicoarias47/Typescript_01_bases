(() => {
  var e = {
      245: (e, t, o) => {
        "use strict";
        o.r(t);
      },
      199: (e, t, o) => {
        var n, r;
        (n = [o, t, o(227)]),
          (r = function (e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = document.getElementById("app"),
              r = document.createElement("nav");
            let a = "";
            o.data.forEach((e) => {
              a += `<a href="">${e[0]}</a>`;
            }),
              (r.innerHTML = a),
              r.classList.add("menu"),
              null == n || n.appendChild(r);
          }.apply(t, n)),
          void 0 === r || (e.exports = r);
      },
      227: (e, t, o) => {
        var n;
        (n = function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.data = void 0),
            (t.data = [
              ["Pokemon API", "poke"],
              ["ToDo List", "todoList"],
            ]);
        }.apply(t, [o, t])),
          void 0 === n || (e.exports = n);
      },
      607: (e, t, o) => {
        var n, r;
        (n = [o, t, o(199), o(245)]),
          void 0 ===
            (r = function (e, t) {
              "use strict";
              console.log("Hola mundo");
              const o = document.getElementById("app"),
                n = document.createElement("h1");
              (n.textContent = "Hola mundo"), null == o || o.appendChild(n);
            }.apply(t, n)) || (e.exports = r);
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, o), a.exports;
  }
  (o.r = (e) => {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
    o(607);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IjhEQUFBLFVBQU8sQ0FBQyxFQUFXLEVBQVcsUUFBbUIsRUFBRixTQUFZQSxFQUFTQyxFQUFTQyxHQUN6RSxhQUNBQyxPQUFPQyxlQUFlSCxFQUFTLGFBQWMsQ0FBRUksT0FBTyxJQUN0RCxNQUFNQyxFQUFNQyxTQUFTQyxlQUFlLE9BQzlCQyxFQUFNRixTQUFTRyxjQUFjLE9BQ25DLElBQUlDLEVBQU8sR0FDWFQsRUFBU1UsS0FBS0MsU0FBU0MsSUFDbkJILEdBQVEsY0FBY0csRUFBRyxRQUFRLElBRXJDTCxFQUFJTSxVQUFZSixFQUNoQkYsRUFBSU8sVUFBVUMsSUFBSSxRQUNsQlgsU0FBMENBLEVBQUlZLFlBQVlULEVBQzdELHNDLGdCQ1pELE1BQStCLEVBQUYsU0FBWVQsRUFBU0MsR0FDOUMsYUFDQUUsT0FBT0MsZUFBZUgsRUFBUyxhQUFjLENBQUVJLE9BQU8sSUFDdERKLEVBQVFXLFVBQU8sRUFDZlgsRUFBUVcsS0FBTyxDQUNYLENBQUMsY0FBZSxRQUNoQixDQUFDLFlBQWEsWUFFckIsVUFSTSxDQUFDLEVBQVcsU0FRbEIsb0Isb0JDUkQsTUFBTyxDQUFDLEVBQVcsRUFBVyxPQUF1QixhQVFwRCxLQVJvRSxFQUFGLFNBQVlaLEVBQVNDLEdBQ3BGLGFBRUFrQixRQUFRQyxJQUFJLGNBQ1osTUFBTWQsRUFBTUMsU0FBU0MsZUFBZSxPQUM5QmEsRUFBUWQsU0FBU0csY0FBYyxNQUNyQ1csRUFBTUMsWUFBYyxhQUNwQmhCLFNBQTBDQSxFQUFJWSxZQUFZRyxFQUM3RCw0QixHQ1BHRSxFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWF6QixRQUdyQixJQUFJMkIsRUFBU0wsRUFBeUJFLEdBQVksQ0FHakR4QixRQUFTLENBQUMsR0FPWCxPQUhBNEIsRUFBb0JKLEdBQVVHLEVBQVFBLEVBQU8zQixRQUFTdUIsR0FHL0NJLEVBQU8zQixPQUNmLENDckJBdUIsRUFBb0JNLEVBQUs3QixJQUNILG9CQUFYOEIsUUFBMEJBLE9BQU9DLGFBQzFDN0IsT0FBT0MsZUFBZUgsRUFBUzhCLE9BQU9DLFlBQWEsQ0FBRTNCLE1BQU8sV0FFN0RGLE9BQU9DLGVBQWVILEVBQVMsYUFBYyxDQUFFSSxPQUFPLEdBQU8sRUNGcENtQixFQUFvQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdHMtbHZsLTEvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHMiLCJ3ZWJwYWNrOi8vcHJveWVjdHMtbHZsLTEvLi9zcmMvZGF0YS9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vcHJveWVjdHMtbHZsLTEvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJveWVjdHMtbHZsLTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJveWVjdHMtbHZsLTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm95ZWN0cy1sdmwtMS93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi4vZGF0YS9uYXZiYXJcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBuYXZiYXJfMSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBsZXQgbWVudSA9IFwiXCI7XHJcbiAgICBuYXZiYXJfMS5kYXRhLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgbWVudSArPSBgPGEgaHJlZj1cIlwiPiR7ZWxbMF19PC9hPmA7XHJcbiAgICB9KTtcclxuICAgIG5hdi5pbm5lckhUTUwgPSBtZW51O1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gICAgYXBwID09PSBudWxsIHx8IGFwcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXBwLmFwcGVuZENoaWxkKG5hdik7XHJcbn0pO1xyXG4iLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIGV4cG9ydHMuZGF0YSA9IHZvaWQgMDtcclxuICAgIGV4cG9ydHMuZGF0YSA9IFtcclxuICAgICAgICBbXCJQb2tlbW9uIEFQSVwiLCBcInBva2VcIl0sXHJcbiAgICAgICAgW1wiVG9EbyBMaXN0XCIsIFwidG9kb0xpc3RcIl0sXHJcbiAgICBdO1xyXG59KTtcclxuIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9jb21wb25lbnRzL05hdkJhclwiLCBcIi4vc3R5bGUuY3NzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhvbGEgbXVuZG9cIik7XHJcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuICAgIGNvbnN0IGhlbGxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVsbG8udGV4dENvbnRlbnQgPSBcIkhvbGEgbXVuZG9cIjtcclxuICAgIGFwcCA9PT0gbnVsbCB8fCBhcHAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFwcC5hcHBlbmRDaGlsZChoZWxsbyk7XHJcbn0pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJleHBvcnRzIiwibmF2YmFyXzEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdiIsImNyZWF0ZUVsZW1lbnQiLCJtZW51IiwiZGF0YSIsImZvckVhY2giLCJlbCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsImhlbGxvIiwidGV4dENvbnRlbnQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIl0sInNvdXJjZVJvb3QiOiIifQ==
