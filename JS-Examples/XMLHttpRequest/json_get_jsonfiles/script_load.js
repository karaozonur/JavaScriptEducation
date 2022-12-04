var settings = {
    "url": "https://4001.hoteladvisor.net",
    "method": "POST",
    "timeout": 0,
    "data": "{\r\n    \"Parameters\": {\r\n        \"HOTELID\": 24846\r\n    },\r\n    \"Action\": \"Function\",\r\n    \"Object\": \"FN_EASYPMS_HOTSPOT_GUESTS\",\r\n    \"OrderBy\": [\r\n        {\r\n            \"Column\": \"null\",\r\n            \"Direction\": null\r\n        }\r\n    ],\r\n    \"Paging\": {\r\n        \"ItemsPerPage\": 100,\r\n        \"Current\": 1\r\n    },\r\n    \"Where\": []\r\n}",
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });