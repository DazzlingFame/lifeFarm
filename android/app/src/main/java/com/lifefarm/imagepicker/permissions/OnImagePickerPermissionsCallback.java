package com.lifefarm.imagepicker.permissions;

import androidx.annotation.NonNull;
import com.facebook.react.modules.core.PermissionListener;

public interface OnImagePickerPermissionsCallback
{
    void setPermissionListener(@NonNull PermissionListener listener);
}
