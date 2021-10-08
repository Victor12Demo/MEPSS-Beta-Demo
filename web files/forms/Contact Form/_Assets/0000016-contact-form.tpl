<div class="form-group">
  <label for="first_name">First name <span class="text-danger">*</span></label>
  <input class="form-control required-field" id="first_name" name="first_name" type="text" />
  <div class="help-block with-errors "></div>
</div>
<div class="form-group">
  <label for="last_name">Last name <span class="text-danger">*</span></label>
  <input class="form-control required-field" id="last_name" name="last_name" type="text" />
  <div class="help-block with-errors "></div>
</div>
<div class="form-group">
  <label for="company_name">Company name <span class="text-danger">*</span></label>
  <input class="form-control required-field" id="company_name" name="company_name" type="text" />
  <div class="help-block with-errors "></div>
</div>
<div class="form-group">
  <label for="email_address">Email address <span class="text-danger">*</span></label>
  <input class="form-control required-field" id="email_address" name="email_address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" type="email" />
  <div class="help-block with-errors "></div>
</div>
<div class="form-group">
  <label for="phone">Phone number <span class="text-danger">*</span></label>
  <input class="form-control required-field" id="phone" name="phone" pattern="\d*" type="text" />
  <div class="help-block with-errors "></div>
</div>
<div class="form-group">
  <label>Choose your departure city:</label>
  <div class="form-check">
    <input checked="checked mt-2" class="form-check-input" id="dept_orlando" name="departure" type="radio" value="Orlando" />
    <label class="form-check-label" for="dept_orlando"> Orlando </label>
  </div>
  <div class="form-check mt-2">
    <input checked="checked" class="form-check-input" id="dept_houston" name="departure" type="radio" value="Houston" />
    <label class="form-check-label" for="dept_houston"> Houston </label>
  </div>
  <div class="form-check mt-2">
    <input checked="checked" class="form-check-input" id="dept_los_angeles" name="departure" type="radio" value="Los Angeles" />
    <label class="form-check-label" for="dept_los_angeles"> Los Angeles </label>
  </div>
</div>
<div class="form-group">
  <label for="message">Do you have any questions? </label>
  <textarea class="form-control required-field" id="message" name="message"></textarea>
  <div class="help-block with-errors "></div>
</div>
<div class="form-group">
  <input name="forwardTo" type="hidden" value="/thank-you.stml" />
  <input class="btn btn-secondary-color font-weight-bold mt-2 px-4" id="submit_button" type="submit" value="Submit" />
</div>

<script>
	$(".required-field").attr("required", "");
	$(".required-field").attr("data-error", "This field is required");
</script>

