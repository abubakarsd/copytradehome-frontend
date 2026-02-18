<script src="/assets/dashboard/popper.min.js"></script>

<script src="/assets/dashboard/bootstrap.bundle.min.js"></script>

<script src="/assets/dashboard/defaultmenu.min.js"></script>

<script src="/assets/dashboard/waves.min.js"></script>

<script src="/assets/dashboard/sticky.js"></script>

<script src="/assets/dashboard/simplebar.min.js"></script>

<script src="/assets/dashboard/simplebar.js"></script>

<script src="/assets/dashboard/autoComplete.min.js"></script>

<script src="/assets/dashboard/pickr.es5.min.js"></script>

<script src="/assets/dashboard/flatpickr.min.js"></script>

<script src="/assets/dashboard/apexcharts.min.js"></script>

<script src="/assets/dashboard/crypto-dashboard.js"></script>

<script src="/assets/dashboard/custom.js"></script>

<script src="/assets/dashboard/custom-switcher.min.js"></script>

<script src="/assets/dashboard/swiper-bundle.min.js"></script>

<script src="/assets/dashboard/toasts.js"></script>

<script src="/assets/dashboard/jquery-3.6.1.min.js"></script>

<script src="/assets/dashboard/select2(2).min.js"></script>

<script src="/assets/dashboard/select2.js"></script>

<script>
    function showAppToast(type, message) {
      var toastEl = document.getElementById('topcenter-Toast');
      if (!toastEl) return;

      var bodyEl = document.getElementById('topcenter-toast-body');
      if (bodyEl) {
        bodyEl.textContent = message;
      }

      // Update toast background/text
      toastEl.classList.remove('bg-primary-transparent','text-primary','bg-danger-transparent','text-danger','bg-success-transparent','text-success');

      // Update header background based on type
      var headerEl = toastEl.querySelector('.toast-header');
      if (headerEl) {
        headerEl.classList.remove('bg-primary','bg-success','bg-danger');
      }

      if (type === 'error') {
        toastEl.classList.add('bg-danger-transparent','text-danger');
        if (headerEl) headerEl.classList.add('bg-danger');
      } else if (type === 'success') {
        toastEl.classList.add('bg-success-transparent','text-success');
        if (headerEl) headerEl.classList.add('bg-success');
      } else {
        toastEl.classList.add('bg-primary-transparent','text-primary');
        if (headerEl) headerEl.classList.add('bg-primary');
      }

      if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
        var toast = bootstrap.Toast.getOrCreateInstance(toastEl);
        toast.show();
      } else if (typeof showBootstrapToast === 'function') {
        showBootstrapToast(toastEl);
      }
    }

    function errorToast(message){
      showAppToast('error', message);
    }

    function successToast(message){
      showAppToast('success', message);
    }

    function showToastMessage(){
      showAppToast('error', 'QR Connect is not available at the moment, please try connecting manually!');
    }
  </script>

<script>
    // Global loading state for submit buttons
    document.addEventListener('DOMContentLoaded', function () {
      if (typeof $ !== 'undefined') {
        $('form').on('submit', function () {
          var $btn = $(this).find('button[type="submit"]').first();
          if ($btn.length && !$btn.data('loading')) {
            $btn.data('loading', true);
            $btn.prop('disabled', true);
            $btn.data('original-html', $btn.html());
            $btn.html('<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Processing...');
          }
        });
      }
    });
  </script>

<script>
      var omo = [];
    </script>

<script src="/assets/dashboard/moment.min.js"></script>

<script>
      // $.ajax({
      //   url: "https://copytradehome.com/" + "dashboard/monthlyrevenue/" + "",
      //   method: 'POST',
      //   success: function(res){
      //     var res = JSON.parse(res);
      //     omo = [res.jan, res.feb, res.mar, res.apr, res.may, res.jun, res.jul, res.aug, res.sep, res.oct, res.nov, res.dec];

      //     setValues(omo);
      //     $('#chart-users').attr('data-numbers', omo);

      //   }
      // });

      // $.ajax({
      //   url: "https://copytradehome.com/" + "dashboard/monthlyrevenue/",
      //   method: 'POST',
      //   success: function(res){
      //     var res = JSON.parse(res);
      //     var options = {
      //           series: [
      //               { name: "", type: "column", data: [] },
      //               { name: "2026", type: "line", data: [res.jan, res.feb, res.mar, res.apr, res.may, res.jun, res.jul, res.aug, res.sep, res.oct, res.nov, res.dec] },
      //           ],
      //           chart: { height: 280, type: "line", toolbar: { show: !1 } },
      //           stroke: { width: [0, 3], curve: "smooth" },
      //           plotOptions: { bar: { horizontal: !1, columnWidth: "20%" } },
      //           dataLabels: { enabled: !1 },
      //           legend: { show: !1 },
      //           colors: ["#5664d2", "#1cbb8c"],
      //           labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      //       },
      //       chart = new ApexCharts(document.querySelector("#line-column-chart"), options);
      //       chart.render();
      //     }
      // });
      </script>

<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'bddbab2e08086d85e445c9418222b939727865c1';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>

<script>
      // Set footer year
      document.addEventListener('DOMContentLoaded', function () {
        var yearEl = document.getElementById('year');
        if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
        }
      });
    </script>

