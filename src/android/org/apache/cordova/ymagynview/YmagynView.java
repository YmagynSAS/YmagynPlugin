package org.apache.cordova.ymagynview;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import android.util.Log;

public class YmagynView extends CordovaPlugin{

	public static final String TAG = "Ymagyn";

	public static final String CLOSEVIEW = "closeView";
	public static final String HIDESTATUSBAR = "hideStatusBar";

	@Override
	public boolean execute(String action, JSONArray data, CallbackContext callbackContext) {
		Log.v(TAG, "execute: action=" + action);
		if (CLOSEVIEW.equals(action)) {

			Log.v(TAG, "execute: data=" + data.toString());
			this.cordova.getActivity().finish();
			return true;

		} else if (HIDESTATUSBAR.equals(action)) {
			return true;
		} else {
			Log.e(TAG, "Invalid action : " + action);
			return false;
		}
	}
}

