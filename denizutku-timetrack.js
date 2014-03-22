<script type="text/javascript">
	(function (tos) {
	  window.setInterval(function () {
	    tos = (function (t) {
	      return t[0] == 30 ? (parseInt(t[1]) + 1) + ':00' : (t[1] || '0') + ':' + (parseInt(t[0]) + 30);
	    })(tos.split(':').reverse());
 	    window.pageTracker ? pageTracker._trackEvent('ZiyaretSuresi', 'Dakika', tos) : _gaq.push(['_trackEvent', 'ZiyaretSuresi', 'Dakika', tos]); 
	  }, 30000);
	})('00');
</script>
