@extends('summaryresults')

@section('styles')
<link rel="stylesheet" href="{{ asset('css/nomatch.css') }}">
@endsection

@section('content')
<div class="no-match-card">
  <h2>❌ <span>No Match</span></h2>
  <p>
    Dear, you may not have focused on your choices and may have chosen random options, so there are no matching positions. <br>
    Therefore, it is preferable that you fill in the options again.
  </p>
  <button onclick="restartWizard()" class="btn-restart">🚀 Restart the wizard</button>
</div>
@endsection
