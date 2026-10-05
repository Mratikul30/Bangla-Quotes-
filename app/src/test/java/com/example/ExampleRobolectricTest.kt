package com.example

import android.content.Context
import androidx.test.core.app.ApplicationProvider
import org.junit.Assert.assertEquals
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [36])
class ExampleRobolectricTest {

  @Test
  fun `read string from context`() {
    val context = ApplicationProvider.getApplicationContext<Context>()
    val appName = context.getString(R.string.app_name)
    assertEquals("Bangla Quotes", appName)
  }

  @Test
  fun `verify bridge copy to clipboard`() {
    val context = ApplicationProvider.getApplicationContext<Context>()
    val bridge = AndroidWebAppBridge(context)
    bridge.copyToClipboard("পরীক্ষামূলক স্ট্যাটাস")
    val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as? android.content.ClipboardManager
    assertEquals("পরীক্ষামূলক স্ট্যাটাস", clipboard?.primaryClip?.getItemAt(0)?.text?.toString())
  }
}
