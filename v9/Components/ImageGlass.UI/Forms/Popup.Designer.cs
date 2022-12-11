﻿namespace ImageGlass.UI
{
    partial class Popup
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.tableMain = new System.Windows.Forms.TableLayoutPanel();
            this.panNote = new System.Windows.Forms.FlowLayoutPanel();
            this.lblNote = new ImageGlass.UI.ModernLabel();
            this.lblHeading = new ImageGlass.UI.ModernLabel();
            this.txtValue = new ImageGlass.UI.ModernTextBox();
            this.lblDescription = new ImageGlass.UI.ModernLabel();
            this.picThumbnail = new System.Windows.Forms.PictureBox();
            this.ChkOption = new ImageGlass.UI.ModernCheckBox();
            this.tableMain.SuspendLayout();
            this.panNote.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picThumbnail)).BeginInit();
            this.SuspendLayout();
            // 
            // tableMain
            // 
            this.tableMain.AutoSize = true;
            this.tableMain.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.tableMain.BackColor = System.Drawing.Color.Transparent;
            this.tableMain.ColumnCount = 2;
            this.tableMain.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle());
            this.tableMain.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableMain.Controls.Add(this.panNote, 0, 4);
            this.tableMain.Controls.Add(this.lblHeading, 1, 1);
            this.tableMain.Controls.Add(this.txtValue, 1, 3);
            this.tableMain.Controls.Add(this.lblDescription, 1, 2);
            this.tableMain.Controls.Add(this.picThumbnail, 0, 1);
            this.tableMain.Controls.Add(this.ChkOption, 1, 4);
            this.tableMain.Dock = System.Windows.Forms.DockStyle.Top;
            this.tableMain.Location = new System.Drawing.Point(0, 0);
            this.tableMain.Margin = new System.Windows.Forms.Padding(0);
            this.tableMain.Name = "tableMain";
            this.tableMain.Padding = new System.Windows.Forms.Padding(0, 20, 0, 0);
            this.tableMain.RowCount = 5;
            this.tableMain.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableMain.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableMain.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableMain.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableMain.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableMain.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableMain.Size = new System.Drawing.Size(614, 284);
            this.tableMain.TabIndex = 1;
            // 
            // panNote
            // 
            this.panNote.AutoSize = true;
            this.panNote.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.panNote.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(70)))), ((int)(((byte)(52)))), ((int)(((byte)(32)))));
            this.tableMain.SetColumnSpan(this.panNote, 10);
            this.panNote.Controls.Add(this.lblNote);
            this.panNote.Dock = System.Windows.Forms.DockStyle.Top;
            this.panNote.Location = new System.Drawing.Point(20, 184);
            this.panNote.Margin = new System.Windows.Forms.Padding(20, 20, 20, 0);
            this.panNote.Name = "panNote";
            this.panNote.Padding = new System.Windows.Forms.Padding(20, 10, 20, 10);
            this.panNote.Size = new System.Drawing.Size(574, 43);
            this.panNote.TabIndex = 102;
            this.panNote.Visible = false;
            // 
            // lblNote
            // 
            this.lblNote.AutoSize = true;
            this.lblNote.BackColor = System.Drawing.Color.Transparent;
            this.lblNote.DarkMode = false;
            this.lblNote.ForeColor = System.Drawing.Color.White;
            this.lblNote.Location = new System.Drawing.Point(20, 10);
            this.lblNote.Margin = new System.Windows.Forms.Padding(0);
            this.lblNote.Name = "lblNote";
            this.lblNote.Size = new System.Drawing.Size(50, 23);
            this.lblNote.TabIndex = 5;
            this.lblNote.Text = "[###]";
            // 
            // lblHeading
            // 
            this.lblHeading.AutoSize = true;
            this.lblHeading.BackColor = System.Drawing.Color.Transparent;
            this.lblHeading.DarkMode = false;
            this.lblHeading.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblHeading.Location = new System.Drawing.Point(135, 20);
            this.lblHeading.Margin = new System.Windows.Forms.Padding(15, 0, 20, 20);
            this.lblHeading.Name = "lblHeading";
            this.lblHeading.Size = new System.Drawing.Size(115, 31);
            this.lblHeading.TabIndex = 100;
            this.lblHeading.Text = "[Heading]";
            // 
            // txtValue
            // 
            this.txtValue.BackColor = System.Drawing.SystemColors.Window;
            this.txtValue.DarkMode = false;
            this.txtValue.Dock = System.Windows.Forms.DockStyle.Fill;
            this.txtValue.ForeColor = System.Drawing.SystemColors.WindowText;
            this.txtValue.Location = new System.Drawing.Point(140, 114);
            this.txtValue.Margin = new System.Windows.Forms.Padding(20, 0, 20, 20);
            this.txtValue.MaximumSize = new System.Drawing.Size(0, 240);
            this.txtValue.Name = "txtValue";
            this.txtValue.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.txtValue.Size = new System.Drawing.Size(454, 30);
            this.txtValue.TabIndex = 0;
            this.txtValue.TextChanged += new System.EventHandler(this.TxtValue_TextChanged);
            // 
            // lblDescription
            // 
            this.lblDescription.AutoSize = true;
            this.lblDescription.BackColor = System.Drawing.Color.Transparent;
            this.lblDescription.DarkMode = false;
            this.lblDescription.Location = new System.Drawing.Point(135, 71);
            this.lblDescription.Margin = new System.Windows.Forms.Padding(15, 0, 20, 20);
            this.lblDescription.Name = "lblDescription";
            this.lblDescription.Size = new System.Drawing.Size(82, 23);
            this.lblDescription.TabIndex = 101;
            this.lblDescription.Text = "[Content]";
            // 
            // picThumbnail
            // 
            this.picThumbnail.BackColor = System.Drawing.Color.Transparent;
            this.picThumbnail.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center;
            this.picThumbnail.Location = new System.Drawing.Point(20, 20);
            this.picThumbnail.Margin = new System.Windows.Forms.Padding(20, 0, 0, 20);
            this.picThumbnail.MaximumSize = new System.Drawing.Size(100, 100);
            this.picThumbnail.Name = "picThumbnail";
            this.tableMain.SetRowSpan(this.picThumbnail, 3);
            this.picThumbnail.Size = new System.Drawing.Size(100, 100);
            this.picThumbnail.TabIndex = 4;
            this.picThumbnail.TabStop = false;
            this.picThumbnail.Visible = false;
            // 
            // ChkOption
            // 
            this.ChkOption.AutoSize = true;
            this.ChkOption.BackColor = System.Drawing.Color.Transparent;
            this.tableMain.SetColumnSpan(this.ChkOption, 2);
            this.ChkOption.DarkMode = true;
            this.ChkOption.Location = new System.Drawing.Point(20, 237);
            this.ChkOption.Margin = new System.Windows.Forms.Padding(20, 10, 20, 20);
            this.ChkOption.Name = "ChkOption";
            this.ChkOption.Size = new System.Drawing.Size(289, 27);
            this.ChkOption.TabIndex = 1;
            this.ChkOption.Text = "[Do not show this message again]";
            this.ChkOption.UseVisualStyleBackColor = false;
            // 
            // Popup
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 23F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(614, 493);
            this.ControlBox = false;
            this.Controls.Add(this.tableMain);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.MinimumSize = new System.Drawing.Size(620, 240);
            this.Name = "Popup";
            this.ShowAcceptButton = true;
            this.ShowCancelButton = true;
            this.Text = "[Title]";
            this.Controls.SetChildIndex(this.tableMain, 0);
            this.tableMain.ResumeLayout(false);
            this.tableMain.PerformLayout();
            this.panNote.ResumeLayout(false);
            this.panNote.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picThumbnail)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private TableLayoutPanel tableMain;
        private ModernLabel lblDescription;
        private ModernTextBox txtValue;
        private PictureBox picThumbnail;
        private ModernLabel lblHeading;
        private ModernCheckBox ChkOption;
        private FlowLayoutPanel panNote;
        private ModernLabel lblNote;
    }
}