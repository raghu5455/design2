function checkboxDropdown(selector) {
    $(selector).each(function () {
        var dropdown = $(this);
        var dropdownList = dropdown.find('.dropdown-list');
        var dropdownLabel = dropdown.find('.dropdown-label');
        var checkAllCheckbox = dropdown.find('.check-all');
        var checkboxes = dropdownList.find('input[type=checkbox]').not('.check-all');

        function updateLabel() {
            var checkedCount = checkboxes.filter(':checked').length;
            if (checkAllCheckbox.is(':checked')) {
                dropdownLabel.text(checkboxes.length + ' selected');
            } else {
                dropdownLabel.text(checkedCount + ' selected');
            }
        }

        // Update label on checkbox change
        dropdownList.on('change', 'input[type=checkbox]', function () {
            updateLabel();
        });

        // Toggle dropdown open/close on label click
        dropdownLabel.on('click', function () {
            dropdown.toggleClass('open');
        });

        // Handle "check all" checkbox
        checkAllCheckbox.on('change', function () {
            var isChecked = $(this).is(':checked');
            checkboxes.prop('checked', isChecked);
            updateLabel();
        });

        // Close dropdown if clicking outside
        $(document).on('click touchstart', function (event) {
            if (!$(event.target).closest(dropdown).length) {
                dropdown.removeClass('open');
            }
        });
    });
}

checkboxDropdown('.dropdown');
