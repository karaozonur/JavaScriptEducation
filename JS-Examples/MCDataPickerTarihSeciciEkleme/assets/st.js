const myDatePicker = MCDatepicker.create({ 
   
    el: '#MCDate', // input id ile eşleşmeli

        showCalendarDisplay: false, // Takvim görünümü 
        selectedDate: new Date(), // Bugunun tarihi
        dateFormat: 'DD-MM-YYYY', // Tarih biçimini ayarlayın. Varsayılan: 'GG-AAA-YYYY'.

        //Buton Yazıları
        customClearBTN: 'Temizle', // Temizle butonu yazısı
        customOkBTN: 'Tamam', // Tamam butonu yazısı
        customCancelBTN: 'İptal Et', // İptal Et butonu yazısı

        //Tarih 
       // disableWeekends: true, //Belirli Tarihler gözükmesin istiyorsanız
        //disableWeekDays: [10,12], // orn: [0,2,5]

        // firstWeekday: 0, //Kabul edilen Haftalar haftanın günleri  ör: 1, 0-6 arasındaki sayıları kabul eder; 
         //allowedMonths: [], //Kabul Edilen Aylar ör: [0,1] 0-11 arasındaki sayıları kabul eder; 

        //Haftanın günlerini ve ay adlarını özelleştirin.
        customWeekDays: [
         'Pazartesi',
         'Salı',
         'Çarşamba',
         'Perşembe',
         'Cuma',
         'Ctesi',
         'Pazar'
        ], // Türkçe gün isimleri
        customMonths: [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık'
        ] // Türkçe ay isimleri

})

//https://www.cssscript.com/mc-datepicker/