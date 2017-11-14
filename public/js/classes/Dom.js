function Dom() {
    // Abstract class

    this.canvas = $('canvas')[0];
    this.circleRadius = parseFloat($('#circleRadius')[0].value);
    this.ellipseRadiusX = parseFloat($('#ellipseRadiusX')[0].value);
    this.ellipseRadiusY = parseFloat($('#ellipseRadiusY')[0].value);
    this.hyperbolaRadiusX = parseFloat($('#hyperbolaRadiusX')[0].value);
    this.hyperbolaRadiusY = parseFloat($('#hyperbolaRadiusY')[0].value);
    this.parabolaRadius = parseFloat($('#parabolaRadius')[0].value);
    this.axisX1 = $('#axisX1');
    this.axisX1Value = parseFloat($('#axisX1')[0].value);
    this.axisY1 = $('#axisY1')[0];
    this.axisY1Value = parseFloat($('#axisY1')[0].value);
    this.axisZ1 = $('#axisZ1');
    this.axisZ1Value = parseFloat($('#axisZ1')[0].value);
    this.axisX2 = $('#axisX2')[0];
    this.axisX2Value = parseFloat($('#axisX2')[0].value);
    this.axisY2 = $('#axisY2')[0];
    this.axisY2Value = parseFloat($('#axisY2')[0].value);
    this.axisZ2 = $('#axisZ2')[0];
    this.axisZ2Value = parseFloat($('#axisZ2')[0].value);
    this.timeout = $('#throttling')[0].value;
    this.meshOn = $('#meshOn');
    this.meshOff = $('#meshOn');
    this.axisOn = $('#axisOn');
    this.axisOff = $('#axisOff');
    this.scalePlus = $('#scalePlus');
    this.scaleMinus = $('#scaleMinus');
    this.clearCanvas = $('#clearCanvas');
    this.cube = $('#cube');
    this.document = $(document);

    this.allNavSections = $('.nav .section');
    this.defSection = function (section) {
        return $(".sections .section[data-section='" + section + "']");
    }
}