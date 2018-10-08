$(function() {
    "use strict";

    // Taken from Underscore.js:
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function SearchAndPick(element) {
        this.selections = [];

        this.$element = $(element);

        this.$input = $(".searchnpick-header input", element);
        this.$input.bind ('input', debounce (this.onInput.bind (this), 200));

        this.$selections = $(".searchnpick-selections", element);
        this.$selectionContainer = $(".searchnpick-selection-container", element);
        this.$selectionsSummary = $(".searchnpick-selection-summary", element);
        this.$selectionField = this.$selectionContainer.find(".searchnpick-selection-field");

        this.$results = $(".searchnpick-results", element);
        this.$searchSummary = $(".searchnpick-search-summary", element);

        this.labels = {
            "searchDefaultSummary": this.$searchSummary.text(),
            "selectionSummaryEmpty": this.$selectionContainer.attr("data-selection-empty"),
            "selectionSummarySingular": this.$selectionContainer.attr("data-selection-singular"),
            "selectionSummaryPlural": this.$selectionContainer.attr("data-selection-plural")
        };

        this.totalCount = this.$element.attr("data-total-count");

        // on picking/removing an item from the search results:
        // - if it exists in the selection, add it there
        // - otherwise select or unselect the selection item
        this.$results.on("change", ".searchnpick-selector", function (e) {
            var $result = $(e.target).parent();

            var selectionId = $result.attr("data-selection-id");
            var $selectedResult = this.$selections.find("[data-selection-id='" + selectionId + "']");

            if (e.target.checked) {
                if ($selectedResult.length > 0) {
                    $selectedResult.find(".searchnpick-selector").prop("checked", true).change();
                } else {
                    var $newSelection = $result.clone();
                    this.$selections.append($newSelection);

                    $newSelection.find(".searchnpick-selector").prop("checked", true).change();
                }
            } else {
                $selectedResult.find(".searchnpick-selector").prop("checked", false).change();
            }
        }.bind(this));

        // on selection change, update the selection and the potential results
        this.$selections.on("change", ".searchnpick-selector", function (e) {
            var selectionId = $(e.target).parent().attr("data-selection-id");
            this.onSelectionUpdated(e.target.checked, selectionId);

            this.$results.find("[data-selection-id='" + selectionId + "'] .searchnpick-selector")
                         .prop("checked", e.target.checked);

        }.bind(this));

        // fill selection
        this.$selections.find(".searchnpick-selector").prop("checked", true).change();

        // tick the results' checkbox if they are selected (if such results exist)
        for (var i = 0; i < this.selections.length; ++i) {
            var selectedId = this.selections[i];
            this.$results.find("[data-selection-id='" + selectedId + "'] .searchnpick-selector").prop("checked", true);
        }

        this.updateSelectionsEmptyness();

        this.state = 'default';
    }

    SearchAndPick.prototype.onInput = function (e) {
        var query = this.$input.val().trim();

        var isEmpty = query == '';

        if (this.state == 'default') {
            if (isEmpty == false) {
                this.switchToLoading (query);
            }
        }
        else if (this.state == 'loading') {
            if (isEmpty) {
                this.switchToDefault();
            }
            else {
                this.switchToLoading (query);
            }
        }
        else if (this.state == 'loaded') {
            if (isEmpty) {
                this.switchToDefault();
            }
            else if (this.query != query) {
                this.switchToLoading (query);
            }
        }
    };

    SearchAndPick.prototype.switchToLoading = function (query) {
        if (query.length < 3) return;

//        this.$icon.removeClass ('default').addClass ('loading');
//
        this.$searchSummary.text("Chargement...");
        this.$results.empty();

        this.asynchronousRequest (query, new Date().getTime());
        this.state = 'loading';
    };

    SearchAndPick.prototype.switchToDefault = function () {
//        this.$icon.removeClass ('loading').addClass ('default');
//
        this.$searchSummary.text(this.labels.searchDefaultSummary);
        this.$results.empty();

        this.state = 'default';
        this.timestamp = null; // reset timestamp marker so that possible in-flight asynchronous responses are ignored when received
    };

    SearchAndPick.prototype.switchToLoaded = function() {
//        this.$icon.removeClass ('loading').addClass ('default');
        this.state = 'loaded';
    }

    SearchAndPick.prototype.asynchronousRequest = function (query, timestamp) {
        this.timestamp = timestamp; // record last request time to compare with the local timestamp parameter

        // simulate search results
        var getRandomInt = function(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        };

        setTimeout(function() {
            var all = [
                {name: "Adril REGRAGUI", id: "180"},
                {name: "Damien VIDAL", organisation: "4D TRONIC", id: "212"},
                {name: "Anne-Cécile SUIED MICHELET", organisation: "???", id: "197"},
                {name: "Alain DELOIN", organisation: "A+ Metrologie", id: "4"},
                {name: "Guilène ABID", organisation: "Cilasoft", id: "50"},
                {name: "Georges AJAVON", organisation: "ADG Finance", id: "51"},
                {name: "Samir ALAMI", id: "52"},
                {name: "Etienne ALAURENT", id: "53"},
                {name: "Brice ANTOINE", id: "54"},
                {name: "Judith Arkle", organisation: "orium", id: "55"},
                {name: "Jean-Michel ARMAND", id: "56"},
                {name: "Laurent AUGUET", organisation: "Delko Developpment", id: "57"},
                {name: "Michel AVARGUES", organisation: "Alphaprint", id: "58"},
                {name: "Véronique BALLIERE", id: "59"},
                {name: "Lionel Baret", id: "60"},
                {name: "Marianne BARTOLI", organisation: "Édition du forum", id: "61"},
            ];

            var results = [];

            var randomCount = getRandomInt(0, 50);
            for (var i = 0; i < randomCount; ++i) {
                var index = getRandomInt(0, all.length);
                var result = all[index];
                if (results.indexOf(result) == -1) {
                    results.push(result);
                }
            }

            // send results
            this.onResultsReceived (query, timestamp, results);
        }.bind(this), 1000);
    };

    SearchAndPick.prototype.onResultsReceived = function (query, timestamp, results) {
//        console.log ('received results from query ' + query + ' sent at ' + timestamp + ' - last known request timestamp: ' + this.timestamp);

        // filter results from older queries, and results from in-flight queries for unwanted requests
        if (this.timestamp == null || timestamp < this.timestamp)
            return;

        var count = results.length;
        if (count > 0) {
            for (var i = 0; i < count; ++i) {
                var result = results[i];
                this.onResultReceived(result);
            }
        }

        this.$searchSummary.empty();

        if (count == 0) {
            var label = "Aucun résultat pour la recherche \"" + query + "\"";
            this.$searchSummary.append($("<span>").addClass("searchnpick-result-counter").text(label));
        } else if (count == 1) {
            var label = "1 contact sur " + this.totalCount;
            this.$searchSummary.append($("<span>").addClass("searchnpick-result-counter").text(label));
        } else {
            var label = count + " contacts sur " + this.totalCount;
            this.$searchSummary.append($("<span>").addClass("searchnpick-result-counter").text(label));
            this.$searchSummary.append($('<span class="searchnpick-sort">Triés <span class="searchnpick-sort-key">par nom</span></span>'));
        }

        this.switchToLoaded();
    };

    SearchAndPick.prototype.onResultReceived = function (result) {
        var $result = $("<label>").addClass("searchnpick-contact")
                                  .attr("data-selection-id", result.id);

        var isResultInSelection = this.selections.indexOf(result.id) >= 0;
        $result.append(
            $("<input type='checkbox'>").addClass("searchnpick-selector").prop("checked", isResultInSelection)
        );

        $result.append(
            $("<div>").addClass("searchnpick-contact-name").text(result.name)
        );

        if (result.organisation) {
            $result.append(
                $("<div>").addClass("searchnpick-contact-company").text(result.organisation)
            );
        }

        this.$results.append($result);
    }

    SearchAndPick.prototype.onSelectionUpdated = function(addToSelection, selectionId) {
        if (addToSelection) {
            if (this.selections.indexOf(selectionId) < 0) {
                this.selections.push(selectionId);
            }
        } else {
            var index = this.selections.indexOf(selectionId);
            if (index >= 0) {
                this.selections.splice(index, 1);
            }
        }

        // fill the form hidden input with the selection ids
        this.$selectionField.val (this.selections.join(","));
        this.updateSummaryLabel();
        this.updateSelectionsEmptyness();

        console.log ("selection: [%s]", this.$selectionField.val());
    };

    SearchAndPick.prototype.updateSummaryLabel = function() {
        var count = this.selections.length;
        var label;
        if (count == 0) {
            label = this.labels.selectionSummaryEmpty;
        } else if (count == 1) {
            label = count + " " + this.labels.selectionSummarySingular;
        } else {
            label = count + " " + this.labels.selectionSummaryPlural;
        }

        this.$selectionsSummary.text(label);
    };

    SearchAndPick.prototype.updateSelectionsEmptyness = function () {
        if (this.$selections.find("label").length == 0) {
            this.$selections.addClass("searchnpick-empty-selection");
        } else {
            this.$selections.removeClass("searchnpick-empty-selection");
        }
    };

    new SearchAndPick($(".searchnpick-contacts"));

});
